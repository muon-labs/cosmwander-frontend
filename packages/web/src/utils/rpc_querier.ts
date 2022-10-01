// const tmClient = await Tendermint34Client.connect(RPC_ENDPOINT)
//         const client = new QueryClient(tmClient)
//         const rpc = createProtobufRpcClient(client)
//         const request: QueryPoolsRequest = {
//           pagination: undefined
//         }
//         const data = QueryPoolsRequest.encode(request).finish()
//         const responseData = await rpc.request(
//           'osmosis.gamm.v1beta1.Query',
//           'Pools',
//           data
//         )
//         const response = QueryPoolsResponse.decode(responseData)
//         console.log({ response })
