import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { buildRepo, cloneRepo } from './src/services/build'
import { getCodeMetadata } from './src/services/code-metadata'

const app = express()

// use bodyparser json
app.use(express.json())

app.post('/clone', async (req, res) => {
  const gitRepo = req.body.git_repo_url
  const { result, error } = cloneRepo(gitRepo)

  res.json({ result, error })
})

app.post('/build', async (req, res) => {
  const gitRepo = req.body.git_repo_url
  const pathToBuild = req.body.path
  const codeId = req.body.code_id

  if (!codeId) {
    return res.status(400).json({
      result: null,
      error: 'contract_address is required'
    })
  }

  const { result, error } = buildRepo(gitRepo, pathToBuild, codeId)
})

app.get('/code-schema', async (req, res) => {
  const codeId = req.query.code_id
  const chainId = req.query.chain_id
  if (!codeId) {
    res.status(400).json({
      result: null,
      error: 'code_id is required'
    })
  }

  await getCodeMetadata('3', 'osmo-test-4')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
