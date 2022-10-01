import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { buildTree } from '../utils/file_utils'
import admin from './firebase-admin'

export function cloneRepo (gitRepo: string) {
  try {
    execSync(`rm -rf ./root`)

    const command = `git clone ${gitRepo} ./root`
    execSync(command, { stdio: 'inherit' })

    const dirStructure = buildTree('./root')
    //   console.log(JSON.stringify({ dirStructure }, null, 2))
    return { result: dirStructure, error: null }
  } catch (error) {
    console.error('Could not clone repo: ', { error })
    return { result: null, error: (error as Error).message }
  }
}

export async function buildRepo (
  gitRepo: string,
  pathToBuild: string,
  codeId: string
) {
  try {
    execSync(`rm -rf ./root`)

    const command = `git clone ${gitRepo} ./root`
    execSync(command, { stdio: 'inherit' })

    const output = execSync(`cd ${pathToBuild} && cargo schema`, {
      stdio: 'inherit'
    })
    console.log({ output })

    fs.readdirSync(path.join(pathToBuild, 'schema')).forEach(async file => {
      if (
        ['instantiate_msg', 'execute_msg', 'query_msg'].some(fileName =>
          file.includes(fileName)
        )
      ) {
        // upload to cloud storage
        console.log('Found file of interest: ', file)
        const schemaJson = fs
          .readFileSync(path.join(pathToBuild, 'schema', file))
          .toString()
        await admin
          .database()
          .ref(
            `code-id-schemas/${codeId}/${file.substring(
              0,
              file.length - '.json'.length
            )}`
          )
          .set(schemaJson)
      }
    })
  } catch (e) {
    console.error({ e })
  }
}
