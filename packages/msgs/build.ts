import fs from 'fs'
import path from 'path'

const supportedSchemas = ['osmosis']

const out = {} as { [key: string]: any }

async function parseDir (out: { [key: string]: any }, dir: string) {
  // walk the directory and get all the files

  const files = fs.readdirSync(dir)
  for (let file of files) {
    const filePath = path.join(dir, file)

    // check if file is a directory
    if (fs.statSync(filePath).isDirectory()) {
      // run as submodule
      out[file] = {} as { [key: string]: any }
      await parseDir(out[file], filePath)
    } else if (file.endsWith('.json')) {
      // put it in our out object
      const jsonSchema = await import(filePath)
      const schemaName = file.replace('.json', '')

      if (!!out[schemaName])
        throw new Error('Duplicate schema name: ' + schemaName)

      out[schemaName] = jsonSchema
    } else {
      throw new Error(
        'Found a file that is not a directory or a json file, wtf!'
      )
    }
  }
}

async function parse () {
  for (let schemaDir of supportedSchemas) {
    out[schemaDir] = {} as { [key: string]: any }
    await parseDir(out[schemaDir], path.join(__dirname, 'schema', schemaDir))
  }

  fs.writeFileSync(
    path.join(__dirname, 'schema', 'index.ts'),
    `export default ${JSON.stringify(out, null, 2)} as const`
  )
}

parse()

// just write out to index.ts
// export default out
