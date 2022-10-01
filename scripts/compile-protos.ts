import cp from 'child_process'
import path from 'path'
import fs from 'fs'

const packagesPath = path.join(__dirname, '..', 'packages')
const chainsPath = path.join(packagesPath, 'chains')
const wasmdPath = path.join(packagesPath, 'wasmd/third_party/proto/')
const outDirRoot = path.join(packagesPath, 'msgs', 'schema')

fs.rmSync(outDirRoot, { recursive: true, force: true })

function runCompilationCommand (
  outDir: string,
  protoPath: string,
  protoFile: string
) {
  cp.execSync(`mkdir -p ${outDir}`)
  cp.execSync(`ls ${outDir}`)
  cp.execSync(`protoc \
    --jsonschema_out=${outDir} \
    --proto_path=${protoPath} ${protoFile}  -I ${wasmdPath}`)
}

function compileDir (inDir: string, outDir: string, protoPath: string) {
  // walk the dir to get all the files

  const files = fs.readdirSync(inDir)
  for (let file of files) {
    const filePath = path.join(inDir, file)

    // check if file is a directory
    if (fs.statSync(filePath).isDirectory()) {
      // run as submodule
      compileDir(filePath, path.join(outDir, file), protoPath)
    } else if (file.endsWith('.proto')) {
      // compile it if it's a query or tx file (why would we need other types anyway?)
      if (file.startsWith('query') || file.startsWith('tx')) {
        runCompilationCommand(outDir, protoPath, filePath)
      }
    } else {
      throw new Error(
        'Found a file that is not a directory or a proto file, wtf!'
      )
    }
  }
}

async function compileProtos () {
  const chains = fs
    .readdirSync(chainsPath)
    .filter(file => fs.statSync(path.join(chainsPath, file)).isDirectory())

  for (let chain of chains) {
    console.log(`Compiling protos for chain [${chain.toUpperCase()}]`)
    const protoPath = path.join(chainsPath, chain, 'proto') // e.g. chains/osmosis/proto
    const inDir = path.join(protoPath, chain) // e.g. chains/osmosis/proto/osmosis
    const outDir = path.join(outDirRoot, chain) // e.g. packages/msgs/schema/osmosis

    compileDir(inDir, outDir, protoPath)
    console.log(`Done with protos for chain [${chain.toUpperCase()}]`)
  }

  // now build our index.ts file
  await import(path.join(packagesPath, 'msgs', 'build.ts'))
}

compileProtos()

// for typescript:
// protoc --plugin=../../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./types/osmosis --ts_proto_opt=esModuleInterop=true --proto_path=../chains/osmosis/proto ../chains/osmosis/proto/osmosis/gamm/v1beta1/tx.proto  -I ../../../CryptoBase/MHW/MeteorFarmBase/101-meteor-contracts/101/wasmd/third_party/proto/

// to compile typescript grpc gateway bindings:
// npx protoc  --grpc-gateway-ts_out=ts_import_roots=$(pwd)/types,ts_import_root_aliases=base:.  --proto_path=../chains/osmosis/proto ../chains/osmosis/proto/osmosis/gamm/v1beta1/query.proto  -I ../../../CryptoBase/MHW/MeteorFarmBase/101-meteor-contracts/101/wasmd/third_party/proto/

// to compile openapiv2 json schema:
// npx protoc  --openapiv2_out=api --openapiv2_opt=Mgoogle/protobuf/any.proto=../../../CryptoBase/MHW/MeteorFarmBase/101-meteor-contracts/101/wasmd/third_party/proto/google/protobuf/any.proto --openapiv2_opt use_go_templates=true --openapiv2_opt json_names_for_fields=false --openapiv2_opt fqn_for_openapi_name=true  --proto_path=../chains/osmosis/proto ../chains/osmosis/proto/osmosis/gamm/v1beta1/query.proto  -I ../../../CryptoBase/MHW/MeteorFarmBase/101-meteor-contracts/101/wasmd/third_party/proto/
