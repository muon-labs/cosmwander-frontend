declare const _default: {
    schema: {
        readonly osmosis: {
            readonly epochs: {
                readonly QueryCurrentEpochRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryCurrentEpochRequest";
                    readonly definitions: {
                        readonly QueryCurrentEpochRequest: {
                            readonly properties: {
                                readonly identifier: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Current Epoch Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryCurrentEpochRequest";
                        readonly definitions: {
                            readonly QueryCurrentEpochRequest: {
                                readonly properties: {
                                    readonly identifier: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Current Epoch Request";
                            };
                        };
                    };
                };
                readonly QueryCurrentEpochResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryCurrentEpochResponse";
                    readonly definitions: {
                        readonly QueryCurrentEpochResponse: {
                            readonly properties: {
                                readonly current_epoch: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Current Epoch Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryCurrentEpochResponse";
                        readonly definitions: {
                            readonly QueryCurrentEpochResponse: {
                                readonly properties: {
                                    readonly current_epoch: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Current Epoch Response";
                            };
                        };
                    };
                };
                readonly QueryEpochsInfoRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryEpochsInfoRequest";
                    readonly definitions: {
                        readonly QueryEpochsInfoRequest: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Epochs Info Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryEpochsInfoRequest";
                        readonly definitions: {
                            readonly QueryEpochsInfoRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Epochs Info Request";
                            };
                        };
                    };
                };
                readonly QueryEpochsInfoResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryEpochsInfoResponse";
                    readonly definitions: {
                        readonly QueryEpochsInfoResponse: {
                            readonly properties: {
                                readonly epochs: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.epochs.v1beta1.EpochInfo";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Epochs Info Response";
                        };
                        readonly "osmosis.epochs.v1beta1.EpochInfo": {
                            readonly properties: {
                                readonly identifier: {
                                    readonly type: "string";
                                    readonly description: "identifier is a unique reference to this particular timer.";
                                };
                                readonly start_time: {
                                    readonly type: "string";
                                    readonly description: "start_time is the time at which the timer first ever ticks. If start_time is in the future, the epoch will not begin until the start time.";
                                    readonly format: "date-time";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "duration is the time in between epoch ticks. In order for intended behavior to be met, duration should be greater than the chains expected block time. Duration must be non-zero.";
                                    readonly format: "regex";
                                };
                                readonly current_epoch: {
                                    readonly type: "string";
                                    readonly description: "current_epoch is the current epoch number, or in other words, how many times has the timer 'ticked'. The first tick (current_epoch=1) is defined as the first block whose blocktime is greater than the EpochInfo start_time.";
                                };
                                readonly current_epoch_start_time: {
                                    readonly type: "string";
                                    readonly description: "current_epoch_start_time describes the start time of the current timer interval. The interval is (current_epoch_start_time, current_epoch_start_time + duration] When the timer ticks, this is set to current_epoch_start_time = last_epoch_start_time + duration only one timer tick for a given identifier can occur per block. NOTE! The current_epoch_start_time may diverge significantly from the wall-clock time the epoch began at. Wall-clock time of epoch start may be >> current_epoch_start_time. Suppose current_epoch_start_time = 10, duration = 5. Suppose the chain goes offline at t=14, and comes back online at t=30, and produces blocks at every successive time. (t=31, 32, etc.) * The t=30 block will start the epoch for (10, 15] * The t=31 block will start the epoch for (15, 20] * The t=32 block will start the epoch for (20, 25] * The t=33 block will start the epoch for (25, 30] * The t=34 block will start the epoch for (30, 35] * The **t=36** block will start the epoch for (35, 40]";
                                    readonly format: "date-time";
                                };
                                readonly epoch_counting_started: {
                                    readonly type: "boolean";
                                    readonly description: "epoch_counting_started is a boolean, that indicates whether this epoch timer has began yet.";
                                };
                                readonly current_epoch_start_height: {
                                    readonly type: "string";
                                    readonly description: "current_epoch_start_height is the block height at which the current epoch started. (The block height at which the timer last ticked)";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Epoch Info";
                            readonly description: "EpochInfo is a struct that describes the data going into a timer defined by the x/epochs module.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryEpochsInfoResponse";
                        readonly definitions: {
                            readonly QueryEpochsInfoResponse: {
                                readonly properties: {
                                    readonly epochs: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.epochs.v1beta1.EpochInfo";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Epochs Info Response";
                            };
                            readonly "osmosis.epochs.v1beta1.EpochInfo": {
                                readonly properties: {
                                    readonly identifier: {
                                        readonly type: "string";
                                        readonly description: "identifier is a unique reference to this particular timer.";
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly description: "start_time is the time at which the timer first ever ticks. If start_time is in the future, the epoch will not begin until the start time.";
                                        readonly format: "date-time";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "duration is the time in between epoch ticks. In order for intended behavior to be met, duration should be greater than the chains expected block time. Duration must be non-zero.";
                                        readonly format: "regex";
                                    };
                                    readonly current_epoch: {
                                        readonly type: "string";
                                        readonly description: "current_epoch is the current epoch number, or in other words, how many times has the timer 'ticked'. The first tick (current_epoch=1) is defined as the first block whose blocktime is greater than the EpochInfo start_time.";
                                    };
                                    readonly current_epoch_start_time: {
                                        readonly type: "string";
                                        readonly description: "current_epoch_start_time describes the start time of the current timer interval. The interval is (current_epoch_start_time, current_epoch_start_time + duration] When the timer ticks, this is set to current_epoch_start_time = last_epoch_start_time + duration only one timer tick for a given identifier can occur per block. NOTE! The current_epoch_start_time may diverge significantly from the wall-clock time the epoch began at. Wall-clock time of epoch start may be >> current_epoch_start_time. Suppose current_epoch_start_time = 10, duration = 5. Suppose the chain goes offline at t=14, and comes back online at t=30, and produces blocks at every successive time. (t=31, 32, etc.) * The t=30 block will start the epoch for (10, 15] * The t=31 block will start the epoch for (15, 20] * The t=32 block will start the epoch for (20, 25] * The t=33 block will start the epoch for (25, 30] * The t=34 block will start the epoch for (30, 35] * The **t=36** block will start the epoch for (35, 40]";
                                        readonly format: "date-time";
                                    };
                                    readonly epoch_counting_started: {
                                        readonly type: "boolean";
                                        readonly description: "epoch_counting_started is a boolean, that indicates whether this epoch timer has began yet.";
                                    };
                                    readonly current_epoch_start_height: {
                                        readonly type: "string";
                                        readonly description: "current_epoch_start_height is the block height at which the current epoch started. (The block height at which the timer last ticked)";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Epoch Info";
                                readonly description: "EpochInfo is a struct that describes the data going into a timer defined by the x/epochs module.";
                            };
                        };
                    };
                };
            };
            readonly gamm: {
                readonly "pool-models": {
                    readonly balancer: {
                        readonly tx: {
                            readonly MsgCreateBalancerPool: {
                                readonly $schema: "http://json-schema.org/draft-04/schema#";
                                readonly $ref: "#/definitions/MsgCreateBalancerPool";
                                readonly definitions: {
                                    readonly MsgCreateBalancerPool: {
                                        readonly properties: {
                                            readonly sender: {
                                                readonly type: "string";
                                            };
                                            readonly pool_params: {
                                                readonly $ref: "#/definitions/osmosis.gamm.v1beta1.PoolParams";
                                                readonly additionalProperties: true;
                                            };
                                            readonly pool_assets: {
                                                readonly items: {
                                                    readonly $ref: "#/definitions/osmosis.gamm.v1beta1.PoolAsset";
                                                };
                                                readonly type: "array";
                                            };
                                            readonly future_pool_governor: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Msg Create Balancer Pool";
                                        readonly description: "===================== MsgCreatePool";
                                    };
                                    readonly "cosmos.base.v1beta1.Coin": {
                                        readonly properties: {
                                            readonly denom: {
                                                readonly type: "string";
                                            };
                                            readonly amount: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Coin";
                                        readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                    };
                                    readonly "osmosis.gamm.v1beta1.PoolAsset": {
                                        readonly properties: {
                                            readonly token: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                                readonly additionalProperties: true;
                                                readonly description: "Coins we are talking about, the denomination must be unique amongst all PoolAssets for this pool.";
                                            };
                                            readonly weight: {
                                                readonly type: "string";
                                                readonly description: "Weight that is not normalized. This weight must be less than 2^50";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Pool Asset";
                                        readonly description: "Pool asset is an internal struct that combines the amount of the token in the pool, and its balancer weight. This is an awkward packaging of data, and should be revisited in a future state migration.";
                                    };
                                    readonly "osmosis.gamm.v1beta1.PoolParams": {
                                        readonly properties: {
                                            readonly swap_fee: {
                                                readonly type: "string";
                                            };
                                            readonly exit_fee: {
                                                readonly type: "string";
                                            };
                                            readonly smooth_weight_change_params: {
                                                readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SmoothWeightChangeParams";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Pool Params";
                                        readonly description: "PoolParams defined the parameters that will be managed by the pool governance in the future. This params are not managed by the chain governance. Instead they will be managed by the token holders of the pool. The pool's token holders are specified in future_pool_governor.";
                                    };
                                    readonly "osmosis.gamm.v1beta1.SmoothWeightChangeParams": {
                                        readonly properties: {
                                            readonly start_time: {
                                                readonly type: "string";
                                                readonly description: "The start time for beginning the weight change. If a parameter change / pool instantiation leaves this blank, it should be generated by the state_machine as the current time.";
                                                readonly format: "date-time";
                                            };
                                            readonly duration: {
                                                readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                                readonly type: "string";
                                                readonly description: "Duration for the weights to change over";
                                                readonly format: "regex";
                                            };
                                            readonly initial_pool_weights: {
                                                readonly items: {
                                                    readonly $ref: "#/definitions/osmosis.gamm.v1beta1.PoolAsset";
                                                };
                                                readonly type: "array";
                                                readonly description: "The initial pool weights. These are copied from the pool's settings at the time of weight change instantiation. The amount PoolAsset.token.amount field is ignored if present, future type refactorings should just have a type with the denom & weight here.";
                                            };
                                            readonly target_pool_weights: {
                                                readonly items: {
                                                    readonly $ref: "#/definitions/osmosis.gamm.v1beta1.PoolAsset";
                                                };
                                                readonly type: "array";
                                                readonly description: "The target pool weights. The pool weights will change linearly with respect to time between start_time, and start_time + duration. The amount PoolAsset.token.amount field is ignored if present, future type refactorings should just have a type with the denom & weight here.  Intermediate variable for the 'slope' of pool weights. This is equal to (target_pool_weights - initial_pool_weights) / (duration) TODO: Work out precision, and decide if this is good to add repeated PoolAsset poolWeightSlope = 5 [  (gogoproto.moretags) = \"yaml:\\\"pool_weight_slope\\\"\",  (gogoproto.nullable) = false ];";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Smooth Weight Change Params";
                                        readonly description: "Parameters for changing the weights in a balancer pool smoothly from a start weight and end weight over a period of time. Currently, the only smooth change supported is linear changing between the two weights, but more types may be added in the future. When these parameters are set, the weight w(t) for pool time `t` is the following:   t <= start_time: w(t) = initial_pool_weights   start_time < t <= start_time + duration:     w(t) = initial_pool_weights + (t - start_time) *       (target_pool_weights - initial_pool_weights) / (duration)   t > start_time + duration: w(t) = target_pool_weights";
                                    };
                                };
                                readonly default: {
                                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                                    readonly $ref: "#/definitions/MsgCreateBalancerPool";
                                    readonly definitions: {
                                        readonly MsgCreateBalancerPool: {
                                            readonly properties: {
                                                readonly sender: {
                                                    readonly type: "string";
                                                };
                                                readonly pool_params: {
                                                    readonly $ref: "#/definitions/osmosis.gamm.v1beta1.PoolParams";
                                                    readonly additionalProperties: true;
                                                };
                                                readonly pool_assets: {
                                                    readonly items: {
                                                        readonly $ref: "#/definitions/osmosis.gamm.v1beta1.PoolAsset";
                                                    };
                                                    readonly type: "array";
                                                };
                                                readonly future_pool_governor: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly additionalProperties: true;
                                            readonly type: "object";
                                            readonly title: "Msg Create Balancer Pool";
                                            readonly description: "===================== MsgCreatePool";
                                        };
                                        readonly "cosmos.base.v1beta1.Coin": {
                                            readonly properties: {
                                                readonly denom: {
                                                    readonly type: "string";
                                                };
                                                readonly amount: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly additionalProperties: true;
                                            readonly type: "object";
                                            readonly title: "Coin";
                                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                        };
                                        readonly "osmosis.gamm.v1beta1.PoolAsset": {
                                            readonly properties: {
                                                readonly token: {
                                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                                    readonly additionalProperties: true;
                                                    readonly description: "Coins we are talking about, the denomination must be unique amongst all PoolAssets for this pool.";
                                                };
                                                readonly weight: {
                                                    readonly type: "string";
                                                    readonly description: "Weight that is not normalized. This weight must be less than 2^50";
                                                };
                                            };
                                            readonly additionalProperties: true;
                                            readonly type: "object";
                                            readonly title: "Pool Asset";
                                            readonly description: "Pool asset is an internal struct that combines the amount of the token in the pool, and its balancer weight. This is an awkward packaging of data, and should be revisited in a future state migration.";
                                        };
                                        readonly "osmosis.gamm.v1beta1.PoolParams": {
                                            readonly properties: {
                                                readonly swap_fee: {
                                                    readonly type: "string";
                                                };
                                                readonly exit_fee: {
                                                    readonly type: "string";
                                                };
                                                readonly smooth_weight_change_params: {
                                                    readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SmoothWeightChangeParams";
                                                    readonly additionalProperties: true;
                                                };
                                            };
                                            readonly additionalProperties: true;
                                            readonly type: "object";
                                            readonly title: "Pool Params";
                                            readonly description: "PoolParams defined the parameters that will be managed by the pool governance in the future. This params are not managed by the chain governance. Instead they will be managed by the token holders of the pool. The pool's token holders are specified in future_pool_governor.";
                                        };
                                        readonly "osmosis.gamm.v1beta1.SmoothWeightChangeParams": {
                                            readonly properties: {
                                                readonly start_time: {
                                                    readonly type: "string";
                                                    readonly description: "The start time for beginning the weight change. If a parameter change / pool instantiation leaves this blank, it should be generated by the state_machine as the current time.";
                                                    readonly format: "date-time";
                                                };
                                                readonly duration: {
                                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                                    readonly type: "string";
                                                    readonly description: "Duration for the weights to change over";
                                                    readonly format: "regex";
                                                };
                                                readonly initial_pool_weights: {
                                                    readonly items: {
                                                        readonly $ref: "#/definitions/osmosis.gamm.v1beta1.PoolAsset";
                                                    };
                                                    readonly type: "array";
                                                    readonly description: "The initial pool weights. These are copied from the pool's settings at the time of weight change instantiation. The amount PoolAsset.token.amount field is ignored if present, future type refactorings should just have a type with the denom & weight here.";
                                                };
                                                readonly target_pool_weights: {
                                                    readonly items: {
                                                        readonly $ref: "#/definitions/osmosis.gamm.v1beta1.PoolAsset";
                                                    };
                                                    readonly type: "array";
                                                    readonly description: "The target pool weights. The pool weights will change linearly with respect to time between start_time, and start_time + duration. The amount PoolAsset.token.amount field is ignored if present, future type refactorings should just have a type with the denom & weight here.  Intermediate variable for the 'slope' of pool weights. This is equal to (target_pool_weights - initial_pool_weights) / (duration) TODO: Work out precision, and decide if this is good to add repeated PoolAsset poolWeightSlope = 5 [  (gogoproto.moretags) = \"yaml:\\\"pool_weight_slope\\\"\",  (gogoproto.nullable) = false ];";
                                                };
                                            };
                                            readonly additionalProperties: true;
                                            readonly type: "object";
                                            readonly title: "Smooth Weight Change Params";
                                            readonly description: "Parameters for changing the weights in a balancer pool smoothly from a start weight and end weight over a period of time. Currently, the only smooth change supported is linear changing between the two weights, but more types may be added in the future. When these parameters are set, the weight w(t) for pool time `t` is the following:   t <= start_time: w(t) = initial_pool_weights   start_time < t <= start_time + duration:     w(t) = initial_pool_weights + (t - start_time) *       (target_pool_weights - initial_pool_weights) / (duration)   t > start_time + duration: w(t) = target_pool_weights";
                                        };
                                    };
                                };
                            };
                            readonly MsgCreateBalancerPoolResponse: {
                                readonly $schema: "http://json-schema.org/draft-04/schema#";
                                readonly $ref: "#/definitions/MsgCreateBalancerPoolResponse";
                                readonly definitions: {
                                    readonly MsgCreateBalancerPoolResponse: {
                                        readonly properties: {
                                            readonly pool_id: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Msg Create Balancer Pool Response";
                                        readonly description: "Returns the poolID";
                                    };
                                };
                                readonly default: {
                                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                                    readonly $ref: "#/definitions/MsgCreateBalancerPoolResponse";
                                    readonly definitions: {
                                        readonly MsgCreateBalancerPoolResponse: {
                                            readonly properties: {
                                                readonly pool_id: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly additionalProperties: true;
                                            readonly type: "object";
                                            readonly title: "Msg Create Balancer Pool Response";
                                            readonly description: "Returns the poolID";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly stableswap: {
                        readonly MsgCreateStableswapPool: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgCreateStableswapPool";
                            readonly definitions: {
                                readonly MsgCreateStableswapPool: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_params: {
                                            readonly $ref: "#/definitions/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams";
                                            readonly additionalProperties: true;
                                        };
                                        readonly initial_pool_liquidity: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                        };
                                        readonly future_pool_governor: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Create Stableswap Pool";
                                    readonly description: "===================== MsgCreatePool";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                                readonly "osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams": {
                                    readonly properties: {
                                        readonly swap_fee: {
                                            readonly type: "string";
                                        };
                                        readonly exit_fee: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Pool Params";
                                    readonly description: "PoolParams defined the parameters that will be managed by the pool governance in the future. This params are not managed by the chain governance. Instead they will be managed by the token holders of the pool. The pool's token holders are specified in future_pool_governor.";
                                };
                            };
                            readonly default: {
                                readonly $schema: "http://json-schema.org/draft-04/schema#";
                                readonly $ref: "#/definitions/MsgCreateStableswapPool";
                                readonly definitions: {
                                    readonly MsgCreateStableswapPool: {
                                        readonly properties: {
                                            readonly sender: {
                                                readonly type: "string";
                                            };
                                            readonly pool_params: {
                                                readonly $ref: "#/definitions/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams";
                                                readonly additionalProperties: true;
                                            };
                                            readonly initial_pool_liquidity: {
                                                readonly items: {
                                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                                };
                                                readonly type: "array";
                                            };
                                            readonly future_pool_governor: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Msg Create Stableswap Pool";
                                        readonly description: "===================== MsgCreatePool";
                                    };
                                    readonly "cosmos.base.v1beta1.Coin": {
                                        readonly properties: {
                                            readonly denom: {
                                                readonly type: "string";
                                            };
                                            readonly amount: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Coin";
                                        readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                    };
                                    readonly "osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams": {
                                        readonly properties: {
                                            readonly swap_fee: {
                                                readonly type: "string";
                                            };
                                            readonly exit_fee: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Pool Params";
                                        readonly description: "PoolParams defined the parameters that will be managed by the pool governance in the future. This params are not managed by the chain governance. Instead they will be managed by the token holders of the pool. The pool's token holders are specified in future_pool_governor.";
                                    };
                                };
                            };
                        };
                        readonly MsgCreateStableswapPoolResponse: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgCreateStableswapPoolResponse";
                            readonly definitions: {
                                readonly MsgCreateStableswapPoolResponse: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Create Stableswap Pool Response";
                                    readonly description: "Returns a poolID with custom poolName.";
                                };
                            };
                            readonly default: {
                                readonly $schema: "http://json-schema.org/draft-04/schema#";
                                readonly $ref: "#/definitions/MsgCreateStableswapPoolResponse";
                                readonly definitions: {
                                    readonly MsgCreateStableswapPoolResponse: {
                                        readonly properties: {
                                            readonly pool_id: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Msg Create Stableswap Pool Response";
                                        readonly description: "Returns a poolID with custom poolName.";
                                    };
                                };
                            };
                        };
                        readonly MsgStableSwapAdjustScalingFactors: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgStableSwapAdjustScalingFactors";
                            readonly definitions: {
                                readonly MsgStableSwapAdjustScalingFactors: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly scaling_factors: {
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Stable Swap Adjust Scaling Factors";
                                    readonly description: "Sender must be the pool's scaling_factor_governor in order for the tx to succeed. Adjusts stableswap scaling factors.";
                                };
                            };
                            readonly default: {
                                readonly $schema: "http://json-schema.org/draft-04/schema#";
                                readonly $ref: "#/definitions/MsgStableSwapAdjustScalingFactors";
                                readonly definitions: {
                                    readonly MsgStableSwapAdjustScalingFactors: {
                                        readonly properties: {
                                            readonly sender: {
                                                readonly type: "string";
                                            };
                                            readonly pool_id: {
                                                readonly type: "string";
                                            };
                                            readonly scaling_factors: {
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                                readonly type: "array";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Msg Stable Swap Adjust Scaling Factors";
                                        readonly description: "Sender must be the pool's scaling_factor_governor in order for the tx to succeed. Adjusts stableswap scaling factors.";
                                    };
                                };
                            };
                        };
                        readonly MsgStableSwapAdjustScalingFactorsResponse: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgStableSwapAdjustScalingFactorsResponse";
                            readonly definitions: {
                                readonly MsgStableSwapAdjustScalingFactorsResponse: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Stable Swap Adjust Scaling Factors Response";
                                };
                            };
                            readonly default: {
                                readonly $schema: "http://json-schema.org/draft-04/schema#";
                                readonly $ref: "#/definitions/MsgStableSwapAdjustScalingFactorsResponse";
                                readonly definitions: {
                                    readonly MsgStableSwapAdjustScalingFactorsResponse: {
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                        readonly title: "Msg Stable Swap Adjust Scaling Factors Response";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly v1beta1: {
                    readonly MsgExitPool: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgExitPool";
                        readonly definitions: {
                            readonly MsgExitPool: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly share_in_amount: {
                                        readonly type: "string";
                                    };
                                    readonly token_out_mins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Exit Pool";
                                readonly description: "===================== MsgExitPool";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgExitPool";
                            readonly definitions: {
                                readonly MsgExitPool: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly share_in_amount: {
                                            readonly type: "string";
                                        };
                                        readonly token_out_mins: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Exit Pool";
                                    readonly description: "===================== MsgExitPool";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly MsgExitPoolResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgExitPoolResponse";
                        readonly definitions: {
                            readonly MsgExitPoolResponse: {
                                readonly properties: {
                                    readonly token_out: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Exit Pool Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgExitPoolResponse";
                            readonly definitions: {
                                readonly MsgExitPoolResponse: {
                                    readonly properties: {
                                        readonly token_out: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Exit Pool Response";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly MsgExitSwapExternAmountOut: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgExitSwapExternAmountOut";
                        readonly definitions: {
                            readonly MsgExitSwapExternAmountOut: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_out: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                    readonly share_in_max_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Exit Swap Extern Amount Out";
                                readonly description: "===================== MsgExitSwapExternAmountOut";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgExitSwapExternAmountOut";
                            readonly definitions: {
                                readonly MsgExitSwapExternAmountOut: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_out: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            readonly additionalProperties: true;
                                        };
                                        readonly share_in_max_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Exit Swap Extern Amount Out";
                                    readonly description: "===================== MsgExitSwapExternAmountOut";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly MsgExitSwapExternAmountOutResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgExitSwapExternAmountOutResponse";
                        readonly definitions: {
                            readonly MsgExitSwapExternAmountOutResponse: {
                                readonly properties: {
                                    readonly share_in_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Exit Swap Extern Amount Out Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgExitSwapExternAmountOutResponse";
                            readonly definitions: {
                                readonly MsgExitSwapExternAmountOutResponse: {
                                    readonly properties: {
                                        readonly share_in_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Exit Swap Extern Amount Out Response";
                                };
                            };
                        };
                    };
                    readonly MsgExitSwapShareAmountIn: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgExitSwapShareAmountIn";
                        readonly definitions: {
                            readonly MsgExitSwapShareAmountIn: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_out_denom: {
                                        readonly type: "string";
                                    };
                                    readonly share_in_amount: {
                                        readonly type: "string";
                                    };
                                    readonly token_out_min_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Exit Swap Share Amount In";
                                readonly description: "===================== MsgExitSwapShareAmountIn";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgExitSwapShareAmountIn";
                            readonly definitions: {
                                readonly MsgExitSwapShareAmountIn: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_out_denom: {
                                            readonly type: "string";
                                        };
                                        readonly share_in_amount: {
                                            readonly type: "string";
                                        };
                                        readonly token_out_min_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Exit Swap Share Amount In";
                                    readonly description: "===================== MsgExitSwapShareAmountIn";
                                };
                            };
                        };
                    };
                    readonly MsgExitSwapShareAmountInResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgExitSwapShareAmountInResponse";
                        readonly definitions: {
                            readonly MsgExitSwapShareAmountInResponse: {
                                readonly properties: {
                                    readonly token_out_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Exit Swap Share Amount In Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgExitSwapShareAmountInResponse";
                            readonly definitions: {
                                readonly MsgExitSwapShareAmountInResponse: {
                                    readonly properties: {
                                        readonly token_out_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Exit Swap Share Amount In Response";
                                };
                            };
                        };
                    };
                    readonly MsgJoinPool: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgJoinPool";
                        readonly definitions: {
                            readonly MsgJoinPool: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly share_out_amount: {
                                        readonly type: "string";
                                    };
                                    readonly token_in_maxs: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Join Pool";
                                readonly description: "===================== MsgJoinPool This is really MsgJoinPoolNoSwap";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgJoinPool";
                            readonly definitions: {
                                readonly MsgJoinPool: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly share_out_amount: {
                                            readonly type: "string";
                                        };
                                        readonly token_in_maxs: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Join Pool";
                                    readonly description: "===================== MsgJoinPool This is really MsgJoinPoolNoSwap";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly MsgJoinPoolResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgJoinPoolResponse";
                        readonly definitions: {
                            readonly MsgJoinPoolResponse: {
                                readonly properties: {
                                    readonly share_out_amount: {
                                        readonly type: "string";
                                    };
                                    readonly token_in: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Join Pool Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgJoinPoolResponse";
                            readonly definitions: {
                                readonly MsgJoinPoolResponse: {
                                    readonly properties: {
                                        readonly share_out_amount: {
                                            readonly type: "string";
                                        };
                                        readonly token_in: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Join Pool Response";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly MsgJoinSwapExternAmountIn: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgJoinSwapExternAmountIn";
                        readonly definitions: {
                            readonly MsgJoinSwapExternAmountIn: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_in: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                    readonly share_out_min_amount: {
                                        readonly type: "string";
                                        readonly description: "repeated cosmos.base.v1beta1.Coin tokensIn = 5 [   (gogoproto.moretags) = \"yaml:\\\"tokens_in\\\"\",   (gogoproto.nullable) = false ];";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Join Swap Extern Amount In";
                                readonly description: "===================== MsgJoinSwapExternAmountIn TODO: Rename to MsgJoinSwapExactAmountIn";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgJoinSwapExternAmountIn";
                            readonly definitions: {
                                readonly MsgJoinSwapExternAmountIn: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_in: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            readonly additionalProperties: true;
                                        };
                                        readonly share_out_min_amount: {
                                            readonly type: "string";
                                            readonly description: "repeated cosmos.base.v1beta1.Coin tokensIn = 5 [   (gogoproto.moretags) = \"yaml:\\\"tokens_in\\\"\",   (gogoproto.nullable) = false ];";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Join Swap Extern Amount In";
                                    readonly description: "===================== MsgJoinSwapExternAmountIn TODO: Rename to MsgJoinSwapExactAmountIn";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly MsgJoinSwapExternAmountInResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgJoinSwapExternAmountInResponse";
                        readonly definitions: {
                            readonly MsgJoinSwapExternAmountInResponse: {
                                readonly properties: {
                                    readonly share_out_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Join Swap Extern Amount In Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgJoinSwapExternAmountInResponse";
                            readonly definitions: {
                                readonly MsgJoinSwapExternAmountInResponse: {
                                    readonly properties: {
                                        readonly share_out_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Join Swap Extern Amount In Response";
                                };
                            };
                        };
                    };
                    readonly MsgJoinSwapShareAmountOut: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgJoinSwapShareAmountOut";
                        readonly definitions: {
                            readonly MsgJoinSwapShareAmountOut: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_in_denom: {
                                        readonly type: "string";
                                    };
                                    readonly share_out_amount: {
                                        readonly type: "string";
                                    };
                                    readonly token_in_max_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Join Swap Share Amount Out";
                                readonly description: "===================== MsgJoinSwapShareAmountOut";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgJoinSwapShareAmountOut";
                            readonly definitions: {
                                readonly MsgJoinSwapShareAmountOut: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_in_denom: {
                                            readonly type: "string";
                                        };
                                        readonly share_out_amount: {
                                            readonly type: "string";
                                        };
                                        readonly token_in_max_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Join Swap Share Amount Out";
                                    readonly description: "===================== MsgJoinSwapShareAmountOut";
                                };
                            };
                        };
                    };
                    readonly MsgJoinSwapShareAmountOutResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgJoinSwapShareAmountOutResponse";
                        readonly definitions: {
                            readonly MsgJoinSwapShareAmountOutResponse: {
                                readonly properties: {
                                    readonly token_in_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Join Swap Share Amount Out Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgJoinSwapShareAmountOutResponse";
                            readonly definitions: {
                                readonly MsgJoinSwapShareAmountOutResponse: {
                                    readonly properties: {
                                        readonly token_in_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Join Swap Share Amount Out Response";
                                };
                            };
                        };
                    };
                    readonly MsgSwapExactAmountIn: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSwapExactAmountIn";
                        readonly definitions: {
                            readonly MsgSwapExactAmountIn: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly routes: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SwapAmountInRoute";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly token_in: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                    readonly token_out_min_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Swap Exact Amount In";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.gamm.v1beta1.SwapAmountInRoute": {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_out_denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Swap Amount In Route";
                                readonly description: "===================== MsgSwapExactAmountIn";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgSwapExactAmountIn";
                            readonly definitions: {
                                readonly MsgSwapExactAmountIn: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly routes: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SwapAmountInRoute";
                                            };
                                            readonly type: "array";
                                        };
                                        readonly token_in: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            readonly additionalProperties: true;
                                        };
                                        readonly token_out_min_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Swap Exact Amount In";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                                readonly "osmosis.gamm.v1beta1.SwapAmountInRoute": {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_out_denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Swap Amount In Route";
                                    readonly description: "===================== MsgSwapExactAmountIn";
                                };
                            };
                        };
                    };
                    readonly MsgSwapExactAmountInResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSwapExactAmountInResponse";
                        readonly definitions: {
                            readonly MsgSwapExactAmountInResponse: {
                                readonly properties: {
                                    readonly token_out_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Swap Exact Amount In Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgSwapExactAmountInResponse";
                            readonly definitions: {
                                readonly MsgSwapExactAmountInResponse: {
                                    readonly properties: {
                                        readonly token_out_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Swap Exact Amount In Response";
                                };
                            };
                        };
                    };
                    readonly MsgSwapExactAmountOut: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSwapExactAmountOut";
                        readonly definitions: {
                            readonly MsgSwapExactAmountOut: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly routes: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SwapAmountOutRoute";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly token_in_max_amount: {
                                        readonly type: "string";
                                    };
                                    readonly token_out: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Swap Exact Amount Out";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.gamm.v1beta1.SwapAmountOutRoute": {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_in_denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Swap Amount Out Route";
                                readonly description: "===================== MsgSwapExactAmountOut";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgSwapExactAmountOut";
                            readonly definitions: {
                                readonly MsgSwapExactAmountOut: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly routes: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SwapAmountOutRoute";
                                            };
                                            readonly type: "array";
                                        };
                                        readonly token_in_max_amount: {
                                            readonly type: "string";
                                        };
                                        readonly token_out: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            readonly additionalProperties: true;
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Swap Exact Amount Out";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                                readonly "osmosis.gamm.v1beta1.SwapAmountOutRoute": {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_in_denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Swap Amount Out Route";
                                    readonly description: "===================== MsgSwapExactAmountOut";
                                };
                            };
                        };
                    };
                    readonly MsgSwapExactAmountOutResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSwapExactAmountOutResponse";
                        readonly definitions: {
                            readonly MsgSwapExactAmountOutResponse: {
                                readonly properties: {
                                    readonly token_in_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Swap Exact Amount Out Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgSwapExactAmountOutResponse";
                            readonly definitions: {
                                readonly MsgSwapExactAmountOutResponse: {
                                    readonly properties: {
                                        readonly token_in_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Swap Exact Amount Out Response";
                                };
                            };
                        };
                    };
                    readonly QueryNumPoolsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryNumPoolsRequest";
                        readonly definitions: {
                            readonly QueryNumPoolsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Num Pools Request";
                                readonly description: "=============================== NumPools";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryNumPoolsRequest";
                            readonly definitions: {
                                readonly QueryNumPoolsRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Num Pools Request";
                                    readonly description: "=============================== NumPools";
                                };
                            };
                        };
                    };
                    readonly QueryNumPoolsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryNumPoolsResponse";
                        readonly definitions: {
                            readonly QueryNumPoolsResponse: {
                                readonly properties: {
                                    readonly num_pools: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Num Pools Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryNumPoolsResponse";
                            readonly definitions: {
                                readonly QueryNumPoolsResponse: {
                                    readonly properties: {
                                        readonly num_pools: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Num Pools Response";
                                };
                            };
                        };
                    };
                    readonly QueryPoolParamsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryPoolParamsRequest";
                        readonly definitions: {
                            readonly QueryPoolParamsRequest: {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Pool Params Request";
                                readonly description: "=============================== PoolParams";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryPoolParamsRequest";
                            readonly definitions: {
                                readonly QueryPoolParamsRequest: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Pool Params Request";
                                    readonly description: "=============================== PoolParams";
                                };
                            };
                        };
                    };
                    readonly QueryPoolParamsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryPoolParamsResponse";
                        readonly definitions: {
                            readonly QueryPoolParamsResponse: {
                                readonly properties: {
                                    readonly params: {
                                        readonly properties: {
                                            readonly type_url: {
                                                readonly type: "string";
                                                readonly description: "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.";
                                            };
                                            readonly value: {
                                                readonly type: "string";
                                                readonly description: "Must be a valid serialized protocol buffer of the above specified type.";
                                                readonly format: "binary";
                                                readonly binaryEncoding: "base64";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Pool Params Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryPoolParamsResponse";
                            readonly definitions: {
                                readonly QueryPoolParamsResponse: {
                                    readonly properties: {
                                        readonly params: {
                                            readonly properties: {
                                                readonly type_url: {
                                                    readonly type: "string";
                                                    readonly description: "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                    readonly description: "Must be a valid serialized protocol buffer of the above specified type.";
                                                    readonly format: "binary";
                                                    readonly binaryEncoding: "base64";
                                                };
                                            };
                                            readonly additionalProperties: true;
                                            readonly type: "object";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Pool Params Response";
                                };
                            };
                        };
                    };
                    readonly QueryPoolRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryPoolRequest";
                        readonly definitions: {
                            readonly QueryPoolRequest: {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Pool Request";
                                readonly description: "=============================== Pool";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryPoolRequest";
                            readonly definitions: {
                                readonly QueryPoolRequest: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Pool Request";
                                    readonly description: "=============================== Pool";
                                };
                            };
                        };
                    };
                    readonly QueryPoolResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryPoolResponse";
                        readonly definitions: {
                            readonly QueryPoolResponse: {
                                readonly properties: {
                                    readonly pool: {
                                        readonly properties: {
                                            readonly type_url: {
                                                readonly type: "string";
                                                readonly description: "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.";
                                            };
                                            readonly value: {
                                                readonly type: "string";
                                                readonly description: "Must be a valid serialized protocol buffer of the above specified type.";
                                                readonly format: "binary";
                                                readonly binaryEncoding: "base64";
                                            };
                                        };
                                        readonly additionalProperties: true;
                                        readonly type: "object";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Pool Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryPoolResponse";
                            readonly definitions: {
                                readonly QueryPoolResponse: {
                                    readonly properties: {
                                        readonly pool: {
                                            readonly properties: {
                                                readonly type_url: {
                                                    readonly type: "string";
                                                    readonly description: "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                    readonly description: "Must be a valid serialized protocol buffer of the above specified type.";
                                                    readonly format: "binary";
                                                    readonly binaryEncoding: "base64";
                                                };
                                            };
                                            readonly additionalProperties: true;
                                            readonly type: "object";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Pool Response";
                                };
                            };
                        };
                    };
                    readonly QueryPoolsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryPoolsRequest";
                        readonly definitions: {
                            readonly QueryPoolsRequest: {
                                readonly properties: {
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                        readonly additionalProperties: true;
                                        readonly description: "pagination defines an optional pagination for the request.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Pools Request";
                                readonly description: "=============================== Pools";
                            };
                            readonly "cosmos.base.query.v1beta1.PageRequest": {
                                readonly properties: {
                                    readonly key: {
                                        readonly type: "string";
                                        readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly offset: {
                                        readonly type: "string";
                                        readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                    };
                                    readonly limit: {
                                        readonly type: "string";
                                        readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                    };
                                    readonly count_total: {
                                        readonly type: "boolean";
                                        readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                    };
                                    readonly reverse: {
                                        readonly type: "boolean";
                                        readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Request";
                                readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryPoolsRequest";
                            readonly definitions: {
                                readonly QueryPoolsRequest: {
                                    readonly properties: {
                                        readonly pagination: {
                                            readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                            readonly additionalProperties: true;
                                            readonly description: "pagination defines an optional pagination for the request.";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Pools Request";
                                    readonly description: "=============================== Pools";
                                };
                                readonly "cosmos.base.query.v1beta1.PageRequest": {
                                    readonly properties: {
                                        readonly key: {
                                            readonly type: "string";
                                            readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                            readonly format: "binary";
                                            readonly binaryEncoding: "base64";
                                        };
                                        readonly offset: {
                                            readonly type: "string";
                                            readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                        };
                                        readonly limit: {
                                            readonly type: "string";
                                            readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                        };
                                        readonly count_total: {
                                            readonly type: "boolean";
                                            readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                        };
                                        readonly reverse: {
                                            readonly type: "boolean";
                                            readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Page Request";
                                    readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                                };
                            };
                        };
                    };
                    readonly QueryPoolsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryPoolsResponse";
                        readonly definitions: {
                            readonly QueryPoolsResponse: {
                                readonly properties: {
                                    readonly pools: {
                                        readonly items: {
                                            readonly properties: {
                                                readonly type_url: {
                                                    readonly type: "string";
                                                    readonly description: "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                    readonly description: "Must be a valid serialized protocol buffer of the above specified type.";
                                                    readonly format: "binary";
                                                    readonly binaryEncoding: "base64";
                                                };
                                            };
                                            readonly additionalProperties: true;
                                            readonly type: "object";
                                            readonly title: "Any";
                                            readonly description: "`Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++.     Foo foo = ...;     Any any;     any.PackFrom(foo);     ...     if (any.UnpackTo(&foo)) {       ...     } Example 2: Pack and unpack a message in Java.     Foo foo = ...;     Any any = Any.pack(foo);     ...     if (any.is(Foo.class)) {       foo = any.unpack(Foo.class);     }  Example 3: Pack and unpack a message in Python.     foo = Foo(...)     any = Any()     any.Pack(foo)     ...     if any.Is(Foo.DESCRIPTOR):       any.Unpack(foo)       ...  Example 4: Pack and unpack a message in Go      foo := &pb.Foo{...}      any, err := ptypes.MarshalAny(foo)      ...      foo := &pb.Foo{}      if err := ptypes.UnmarshalAny(any, foo); err != nil {        ...      } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example \"foo.bar.com/x/y.z\" will yield type name \"y.z\". JSON ==== The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example:     package google.profile;     message Person {       string first_name = 1;       string last_name = 2;     }     {       \"@type\": \"type.googleapis.com/google.profile.Person\",       \"firstName\": <string>,       \"lastName\": <string>     } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message [google.protobuf.Duration][]):     {       \"@type\": \"type.googleapis.com/google.protobuf.Duration\",       \"value\": \"1.212s\"     }";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                        readonly additionalProperties: true;
                                        readonly description: "pagination defines the pagination in the response.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Pools Response";
                            };
                            readonly "cosmos.base.query.v1beta1.PageResponse": {
                                readonly properties: {
                                    readonly next_key: {
                                        readonly type: "string";
                                        readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly total: {
                                        readonly type: "string";
                                        readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Response";
                                readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryPoolsResponse";
                            readonly definitions: {
                                readonly QueryPoolsResponse: {
                                    readonly properties: {
                                        readonly pools: {
                                            readonly items: {
                                                readonly properties: {
                                                    readonly type_url: {
                                                        readonly type: "string";
                                                        readonly description: "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.";
                                                    };
                                                    readonly value: {
                                                        readonly type: "string";
                                                        readonly description: "Must be a valid serialized protocol buffer of the above specified type.";
                                                        readonly format: "binary";
                                                        readonly binaryEncoding: "base64";
                                                    };
                                                };
                                                readonly additionalProperties: true;
                                                readonly type: "object";
                                                readonly title: "Any";
                                                readonly description: "`Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++.     Foo foo = ...;     Any any;     any.PackFrom(foo);     ...     if (any.UnpackTo(&foo)) {       ...     } Example 2: Pack and unpack a message in Java.     Foo foo = ...;     Any any = Any.pack(foo);     ...     if (any.is(Foo.class)) {       foo = any.unpack(Foo.class);     }  Example 3: Pack and unpack a message in Python.     foo = Foo(...)     any = Any()     any.Pack(foo)     ...     if any.Is(Foo.DESCRIPTOR):       any.Unpack(foo)       ...  Example 4: Pack and unpack a message in Go      foo := &pb.Foo{...}      any, err := ptypes.MarshalAny(foo)      ...      foo := &pb.Foo{}      if err := ptypes.UnmarshalAny(any, foo); err != nil {        ...      } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example \"foo.bar.com/x/y.z\" will yield type name \"y.z\". JSON ==== The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example:     package google.profile;     message Person {       string first_name = 1;       string last_name = 2;     }     {       \"@type\": \"type.googleapis.com/google.profile.Person\",       \"firstName\": <string>,       \"lastName\": <string>     } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message [google.protobuf.Duration][]):     {       \"@type\": \"type.googleapis.com/google.protobuf.Duration\",       \"value\": \"1.212s\"     }";
                                            };
                                            readonly type: "array";
                                        };
                                        readonly pagination: {
                                            readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                            readonly additionalProperties: true;
                                            readonly description: "pagination defines the pagination in the response.";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Pools Response";
                                };
                                readonly "cosmos.base.query.v1beta1.PageResponse": {
                                    readonly properties: {
                                        readonly next_key: {
                                            readonly type: "string";
                                            readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                            readonly format: "binary";
                                            readonly binaryEncoding: "base64";
                                        };
                                        readonly total: {
                                            readonly type: "string";
                                            readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Page Response";
                                    readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                                };
                            };
                        };
                    };
                    readonly QuerySpotPriceRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QuerySpotPriceRequest";
                        readonly definitions: {
                            readonly QuerySpotPriceRequest: {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly base_asset_denom: {
                                        readonly type: "string";
                                    };
                                    readonly quote_asset_denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Spot Price Request";
                                readonly description: "QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice query.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QuerySpotPriceRequest";
                            readonly definitions: {
                                readonly QuerySpotPriceRequest: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly base_asset_denom: {
                                            readonly type: "string";
                                        };
                                        readonly quote_asset_denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Spot Price Request";
                                    readonly description: "QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice query.";
                                };
                            };
                        };
                    };
                    readonly QuerySpotPriceResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QuerySpotPriceResponse";
                        readonly definitions: {
                            readonly QuerySpotPriceResponse: {
                                readonly properties: {
                                    readonly spot_price: {
                                        readonly type: "string";
                                        readonly description: "String of the Dec. Ex) 10.203uatom";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Spot Price Response";
                                readonly description: "QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice query.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QuerySpotPriceResponse";
                            readonly definitions: {
                                readonly QuerySpotPriceResponse: {
                                    readonly properties: {
                                        readonly spot_price: {
                                            readonly type: "string";
                                            readonly description: "String of the Dec. Ex) 10.203uatom";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Spot Price Response";
                                    readonly description: "QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice query.";
                                };
                            };
                        };
                    };
                    readonly QuerySwapExactAmountInRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QuerySwapExactAmountInRequest";
                        readonly definitions: {
                            readonly QuerySwapExactAmountInRequest: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_in: {
                                        readonly type: "string";
                                    };
                                    readonly routes: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SwapAmountInRoute";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Swap Exact Amount In Request";
                                readonly description: "=============================== EstimateSwapExactAmountIn";
                            };
                            readonly "osmosis.gamm.v1beta1.SwapAmountInRoute": {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_out_denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Swap Amount In Route";
                                readonly description: "===================== MsgSwapExactAmountIn";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QuerySwapExactAmountInRequest";
                            readonly definitions: {
                                readonly QuerySwapExactAmountInRequest: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_in: {
                                            readonly type: "string";
                                        };
                                        readonly routes: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SwapAmountInRoute";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Swap Exact Amount In Request";
                                    readonly description: "=============================== EstimateSwapExactAmountIn";
                                };
                                readonly "osmosis.gamm.v1beta1.SwapAmountInRoute": {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_out_denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Swap Amount In Route";
                                    readonly description: "===================== MsgSwapExactAmountIn";
                                };
                            };
                        };
                    };
                    readonly QuerySwapExactAmountInResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QuerySwapExactAmountInResponse";
                        readonly definitions: {
                            readonly QuerySwapExactAmountInResponse: {
                                readonly properties: {
                                    readonly token_out_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Swap Exact Amount In Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QuerySwapExactAmountInResponse";
                            readonly definitions: {
                                readonly QuerySwapExactAmountInResponse: {
                                    readonly properties: {
                                        readonly token_out_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Swap Exact Amount In Response";
                                };
                            };
                        };
                    };
                    readonly QuerySwapExactAmountOutRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QuerySwapExactAmountOutRequest";
                        readonly definitions: {
                            readonly QuerySwapExactAmountOutRequest: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly routes: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SwapAmountOutRoute";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly token_out: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Swap Exact Amount Out Request";
                                readonly description: "=============================== EstimateSwapExactAmountOut";
                            };
                            readonly "osmosis.gamm.v1beta1.SwapAmountOutRoute": {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_in_denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Swap Amount Out Route";
                                readonly description: "===================== MsgSwapExactAmountOut";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QuerySwapExactAmountOutRequest";
                            readonly definitions: {
                                readonly QuerySwapExactAmountOutRequest: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly routes: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.gamm.v1beta1.SwapAmountOutRoute";
                                            };
                                            readonly type: "array";
                                        };
                                        readonly token_out: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Swap Exact Amount Out Request";
                                    readonly description: "=============================== EstimateSwapExactAmountOut";
                                };
                                readonly "osmosis.gamm.v1beta1.SwapAmountOutRoute": {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_in_denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Swap Amount Out Route";
                                    readonly description: "===================== MsgSwapExactAmountOut";
                                };
                            };
                        };
                    };
                    readonly QuerySwapExactAmountOutResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QuerySwapExactAmountOutResponse";
                        readonly definitions: {
                            readonly QuerySwapExactAmountOutResponse: {
                                readonly properties: {
                                    readonly token_in_amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Swap Exact Amount Out Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QuerySwapExactAmountOutResponse";
                            readonly definitions: {
                                readonly QuerySwapExactAmountOutResponse: {
                                    readonly properties: {
                                        readonly token_in_amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Swap Exact Amount Out Response";
                                };
                            };
                        };
                    };
                    readonly QueryTotalLiquidityRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryTotalLiquidityRequest";
                        readonly definitions: {
                            readonly QueryTotalLiquidityRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Total Liquidity Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryTotalLiquidityRequest";
                            readonly definitions: {
                                readonly QueryTotalLiquidityRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Total Liquidity Request";
                                };
                            };
                        };
                    };
                    readonly QueryTotalLiquidityResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryTotalLiquidityResponse";
                        readonly definitions: {
                            readonly QueryTotalLiquidityResponse: {
                                readonly properties: {
                                    readonly liquidity: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Total Liquidity Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryTotalLiquidityResponse";
                            readonly definitions: {
                                readonly QueryTotalLiquidityResponse: {
                                    readonly properties: {
                                        readonly liquidity: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Total Liquidity Response";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly QueryTotalPoolLiquidityRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryTotalPoolLiquidityRequest";
                        readonly definitions: {
                            readonly QueryTotalPoolLiquidityRequest: {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Total Pool Liquidity Request";
                                readonly description: "=============================== PoolLiquidity";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryTotalPoolLiquidityRequest";
                            readonly definitions: {
                                readonly QueryTotalPoolLiquidityRequest: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Total Pool Liquidity Request";
                                    readonly description: "=============================== PoolLiquidity";
                                };
                            };
                        };
                    };
                    readonly QueryTotalPoolLiquidityResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryTotalPoolLiquidityResponse";
                        readonly definitions: {
                            readonly QueryTotalPoolLiquidityResponse: {
                                readonly properties: {
                                    readonly liquidity: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Total Pool Liquidity Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryTotalPoolLiquidityResponse";
                            readonly definitions: {
                                readonly QueryTotalPoolLiquidityResponse: {
                                    readonly properties: {
                                        readonly liquidity: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Total Pool Liquidity Response";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly QueryTotalSharesRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryTotalSharesRequest";
                        readonly definitions: {
                            readonly QueryTotalSharesRequest: {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Total Shares Request";
                                readonly description: "=============================== TotalShares";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryTotalSharesRequest";
                            readonly definitions: {
                                readonly QueryTotalSharesRequest: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Total Shares Request";
                                    readonly description: "=============================== TotalShares";
                                };
                            };
                        };
                    };
                    readonly QueryTotalSharesResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryTotalSharesResponse";
                        readonly definitions: {
                            readonly QueryTotalSharesResponse: {
                                readonly properties: {
                                    readonly total_shares: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Total Shares Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryTotalSharesResponse";
                            readonly definitions: {
                                readonly QueryTotalSharesResponse: {
                                    readonly properties: {
                                        readonly total_shares: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            readonly additionalProperties: true;
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Total Shares Response";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly SwapAmountInRoute: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SwapAmountInRoute";
                        readonly definitions: {
                            readonly SwapAmountInRoute: {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_out_denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Swap Amount In Route";
                                readonly description: "===================== MsgSwapExactAmountIn";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/SwapAmountInRoute";
                            readonly definitions: {
                                readonly SwapAmountInRoute: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_out_denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Swap Amount In Route";
                                    readonly description: "===================== MsgSwapExactAmountIn";
                                };
                            };
                        };
                    };
                    readonly SwapAmountOutRoute: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SwapAmountOutRoute";
                        readonly definitions: {
                            readonly SwapAmountOutRoute: {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly token_in_denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Swap Amount Out Route";
                                readonly description: "===================== MsgSwapExactAmountOut";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/SwapAmountOutRoute";
                            readonly definitions: {
                                readonly SwapAmountOutRoute: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly token_in_denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Swap Amount Out Route";
                                    readonly description: "===================== MsgSwapExactAmountOut";
                                };
                            };
                        };
                    };
                };
            };
            readonly incentives: {
                readonly ActiveGaugesPerDenomRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ActiveGaugesPerDenomRequest";
                    readonly definitions: {
                        readonly ActiveGaugesPerDenomRequest: {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "Desired denom when querying active gagues";
                                };
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the request";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Active Gauges Per Denom Request";
                        };
                        readonly "cosmos.base.query.v1beta1.PageRequest": {
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                    readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly offset: {
                                    readonly type: "string";
                                    readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                };
                                readonly limit: {
                                    readonly type: "string";
                                    readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                };
                                readonly count_total: {
                                    readonly type: "boolean";
                                    readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                };
                                readonly reverse: {
                                    readonly type: "boolean";
                                    readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Request";
                            readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ActiveGaugesPerDenomRequest";
                        readonly definitions: {
                            readonly ActiveGaugesPerDenomRequest: {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Desired denom when querying active gagues";
                                    };
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the request";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Active Gauges Per Denom Request";
                            };
                            readonly "cosmos.base.query.v1beta1.PageRequest": {
                                readonly properties: {
                                    readonly key: {
                                        readonly type: "string";
                                        readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly offset: {
                                        readonly type: "string";
                                        readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                    };
                                    readonly limit: {
                                        readonly type: "string";
                                        readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                    };
                                    readonly count_total: {
                                        readonly type: "boolean";
                                        readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                    };
                                    readonly reverse: {
                                        readonly type: "boolean";
                                        readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Request";
                                readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                            };
                        };
                    };
                };
                readonly ActiveGaugesPerDenomResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ActiveGaugesPerDenomResponse";
                    readonly definitions: {
                        readonly ActiveGaugesPerDenomResponse: {
                            readonly properties: {
                                readonly data: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                    };
                                    readonly type: "array";
                                    readonly description: "Active gagues that match denom in query";
                                };
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the response";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Active Gauges Per Denom Response";
                        };
                        readonly "cosmos.base.query.v1beta1.PageResponse": {
                            readonly properties: {
                                readonly next_key: {
                                    readonly type: "string";
                                    readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly total: {
                                    readonly type: "string";
                                    readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Response";
                            readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.incentives.Gauge": {
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "id is the unique ID of a Gauge";
                                };
                                readonly is_perpetual: {
                                    readonly type: "boolean";
                                    readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                };
                                readonly distribute_to: {
                                    readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                    readonly additionalProperties: true;
                                    readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                };
                                readonly start_time: {
                                    readonly type: "string";
                                    readonly description: "start_time is the distribution start time";
                                    readonly format: "date-time";
                                };
                                readonly num_epochs_paid_over: {
                                    readonly type: "string";
                                    readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                };
                                readonly filled_epochs: {
                                    readonly type: "string";
                                    readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                };
                                readonly distributed_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "distributed_coins are coins that have been distributed already";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauge";
                            readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                        };
                        readonly "osmosis.lockup.QueryCondition": {
                            readonly properties: {
                                readonly lock_query_type: {
                                    readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                    readonly title: "Lock Query Type";
                                    readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "Denom represents the token denomination we are looking to lock up";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                    readonly format: "regex";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Condition";
                            readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ActiveGaugesPerDenomResponse";
                        readonly definitions: {
                            readonly ActiveGaugesPerDenomResponse: {
                                readonly properties: {
                                    readonly data: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                        };
                                        readonly type: "array";
                                        readonly description: "Active gagues that match denom in query";
                                    };
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the response";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Active Gauges Per Denom Response";
                            };
                            readonly "cosmos.base.query.v1beta1.PageResponse": {
                                readonly properties: {
                                    readonly next_key: {
                                        readonly type: "string";
                                        readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly total: {
                                        readonly type: "string";
                                        readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Response";
                                readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.incentives.Gauge": {
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "id is the unique ID of a Gauge";
                                    };
                                    readonly is_perpetual: {
                                        readonly type: "boolean";
                                        readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                    };
                                    readonly distribute_to: {
                                        readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                        readonly additionalProperties: true;
                                        readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly description: "start_time is the distribution start time";
                                        readonly format: "date-time";
                                    };
                                    readonly num_epochs_paid_over: {
                                        readonly type: "string";
                                        readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                    };
                                    readonly filled_epochs: {
                                        readonly type: "string";
                                        readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                    };
                                    readonly distributed_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "distributed_coins are coins that have been distributed already";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge";
                                readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                            };
                            readonly "osmosis.lockup.QueryCondition": {
                                readonly properties: {
                                    readonly lock_query_type: {
                                        readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Lock Query Type";
                                        readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Denom represents the token denomination we are looking to lock up";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                        readonly format: "regex";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Condition";
                                readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                            };
                        };
                    };
                };
                readonly ActiveGaugesRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ActiveGaugesRequest";
                    readonly definitions: {
                        readonly ActiveGaugesRequest: {
                            readonly properties: {
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the request";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Active Gauges Request";
                        };
                        readonly "cosmos.base.query.v1beta1.PageRequest": {
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                    readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly offset: {
                                    readonly type: "string";
                                    readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                };
                                readonly limit: {
                                    readonly type: "string";
                                    readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                };
                                readonly count_total: {
                                    readonly type: "boolean";
                                    readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                };
                                readonly reverse: {
                                    readonly type: "boolean";
                                    readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Request";
                            readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ActiveGaugesRequest";
                        readonly definitions: {
                            readonly ActiveGaugesRequest: {
                                readonly properties: {
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the request";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Active Gauges Request";
                            };
                            readonly "cosmos.base.query.v1beta1.PageRequest": {
                                readonly properties: {
                                    readonly key: {
                                        readonly type: "string";
                                        readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly offset: {
                                        readonly type: "string";
                                        readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                    };
                                    readonly limit: {
                                        readonly type: "string";
                                        readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                    };
                                    readonly count_total: {
                                        readonly type: "boolean";
                                        readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                    };
                                    readonly reverse: {
                                        readonly type: "boolean";
                                        readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Request";
                                readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                            };
                        };
                    };
                };
                readonly ActiveGaugesResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ActiveGaugesResponse";
                    readonly definitions: {
                        readonly ActiveGaugesResponse: {
                            readonly properties: {
                                readonly data: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                    };
                                    readonly type: "array";
                                    readonly description: "Active gagues only";
                                };
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the response";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Active Gauges Response";
                        };
                        readonly "cosmos.base.query.v1beta1.PageResponse": {
                            readonly properties: {
                                readonly next_key: {
                                    readonly type: "string";
                                    readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly total: {
                                    readonly type: "string";
                                    readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Response";
                            readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.incentives.Gauge": {
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "id is the unique ID of a Gauge";
                                };
                                readonly is_perpetual: {
                                    readonly type: "boolean";
                                    readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                };
                                readonly distribute_to: {
                                    readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                    readonly additionalProperties: true;
                                    readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                };
                                readonly start_time: {
                                    readonly type: "string";
                                    readonly description: "start_time is the distribution start time";
                                    readonly format: "date-time";
                                };
                                readonly num_epochs_paid_over: {
                                    readonly type: "string";
                                    readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                };
                                readonly filled_epochs: {
                                    readonly type: "string";
                                    readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                };
                                readonly distributed_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "distributed_coins are coins that have been distributed already";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauge";
                            readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                        };
                        readonly "osmosis.lockup.QueryCondition": {
                            readonly properties: {
                                readonly lock_query_type: {
                                    readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                    readonly title: "Lock Query Type";
                                    readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "Denom represents the token denomination we are looking to lock up";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                    readonly format: "regex";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Condition";
                            readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ActiveGaugesResponse";
                        readonly definitions: {
                            readonly ActiveGaugesResponse: {
                                readonly properties: {
                                    readonly data: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                        };
                                        readonly type: "array";
                                        readonly description: "Active gagues only";
                                    };
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the response";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Active Gauges Response";
                            };
                            readonly "cosmos.base.query.v1beta1.PageResponse": {
                                readonly properties: {
                                    readonly next_key: {
                                        readonly type: "string";
                                        readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly total: {
                                        readonly type: "string";
                                        readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Response";
                                readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.incentives.Gauge": {
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "id is the unique ID of a Gauge";
                                    };
                                    readonly is_perpetual: {
                                        readonly type: "boolean";
                                        readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                    };
                                    readonly distribute_to: {
                                        readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                        readonly additionalProperties: true;
                                        readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly description: "start_time is the distribution start time";
                                        readonly format: "date-time";
                                    };
                                    readonly num_epochs_paid_over: {
                                        readonly type: "string";
                                        readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                    };
                                    readonly filled_epochs: {
                                        readonly type: "string";
                                        readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                    };
                                    readonly distributed_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "distributed_coins are coins that have been distributed already";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge";
                                readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                            };
                            readonly "osmosis.lockup.QueryCondition": {
                                readonly properties: {
                                    readonly lock_query_type: {
                                        readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Lock Query Type";
                                        readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Denom represents the token denomination we are looking to lock up";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                        readonly format: "regex";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Condition";
                                readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                            };
                        };
                    };
                };
                readonly GaugeByIDRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/GaugeByIDRequest";
                    readonly definitions: {
                        readonly GaugeByIDRequest: {
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "Gague ID being queried";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauge By ID Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/GaugeByIDRequest";
                        readonly definitions: {
                            readonly GaugeByIDRequest: {
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "Gague ID being queried";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge By ID Request";
                            };
                        };
                    };
                };
                readonly GaugeByIDResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/GaugeByIDResponse";
                    readonly definitions: {
                        readonly GaugeByIDResponse: {
                            readonly properties: {
                                readonly gauge: {
                                    readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                    readonly additionalProperties: true;
                                    readonly description: "Gauge that corresponds to provided gague ID";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauge By ID Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.incentives.Gauge": {
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "id is the unique ID of a Gauge";
                                };
                                readonly is_perpetual: {
                                    readonly type: "boolean";
                                    readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                };
                                readonly distribute_to: {
                                    readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                    readonly additionalProperties: true;
                                    readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                };
                                readonly start_time: {
                                    readonly type: "string";
                                    readonly description: "start_time is the distribution start time";
                                    readonly format: "date-time";
                                };
                                readonly num_epochs_paid_over: {
                                    readonly type: "string";
                                    readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                };
                                readonly filled_epochs: {
                                    readonly type: "string";
                                    readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                };
                                readonly distributed_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "distributed_coins are coins that have been distributed already";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauge";
                            readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                        };
                        readonly "osmosis.lockup.QueryCondition": {
                            readonly properties: {
                                readonly lock_query_type: {
                                    readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                    readonly title: "Lock Query Type";
                                    readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "Denom represents the token denomination we are looking to lock up";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                    readonly format: "regex";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Condition";
                            readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/GaugeByIDResponse";
                        readonly definitions: {
                            readonly GaugeByIDResponse: {
                                readonly properties: {
                                    readonly gauge: {
                                        readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                        readonly additionalProperties: true;
                                        readonly description: "Gauge that corresponds to provided gague ID";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge By ID Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.incentives.Gauge": {
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "id is the unique ID of a Gauge";
                                    };
                                    readonly is_perpetual: {
                                        readonly type: "boolean";
                                        readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                    };
                                    readonly distribute_to: {
                                        readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                        readonly additionalProperties: true;
                                        readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly description: "start_time is the distribution start time";
                                        readonly format: "date-time";
                                    };
                                    readonly num_epochs_paid_over: {
                                        readonly type: "string";
                                        readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                    };
                                    readonly filled_epochs: {
                                        readonly type: "string";
                                        readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                    };
                                    readonly distributed_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "distributed_coins are coins that have been distributed already";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge";
                                readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                            };
                            readonly "osmosis.lockup.QueryCondition": {
                                readonly properties: {
                                    readonly lock_query_type: {
                                        readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Lock Query Type";
                                        readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Denom represents the token denomination we are looking to lock up";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                        readonly format: "regex";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Condition";
                                readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                            };
                        };
                    };
                };
                readonly GaugesRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/GaugesRequest";
                    readonly definitions: {
                        readonly GaugesRequest: {
                            readonly properties: {
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the request";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauges Request";
                        };
                        readonly "cosmos.base.query.v1beta1.PageRequest": {
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                    readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly offset: {
                                    readonly type: "string";
                                    readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                };
                                readonly limit: {
                                    readonly type: "string";
                                    readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                };
                                readonly count_total: {
                                    readonly type: "boolean";
                                    readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                };
                                readonly reverse: {
                                    readonly type: "boolean";
                                    readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Request";
                            readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/GaugesRequest";
                        readonly definitions: {
                            readonly GaugesRequest: {
                                readonly properties: {
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the request";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauges Request";
                            };
                            readonly "cosmos.base.query.v1beta1.PageRequest": {
                                readonly properties: {
                                    readonly key: {
                                        readonly type: "string";
                                        readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly offset: {
                                        readonly type: "string";
                                        readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                    };
                                    readonly limit: {
                                        readonly type: "string";
                                        readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                    };
                                    readonly count_total: {
                                        readonly type: "boolean";
                                        readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                    };
                                    readonly reverse: {
                                        readonly type: "boolean";
                                        readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Request";
                                readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                            };
                        };
                    };
                };
                readonly GaugesResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/GaugesResponse";
                    readonly definitions: {
                        readonly GaugesResponse: {
                            readonly properties: {
                                readonly data: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                    };
                                    readonly type: "array";
                                    readonly description: "Upcoming and active gauges";
                                };
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the response";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauges Response";
                        };
                        readonly "cosmos.base.query.v1beta1.PageResponse": {
                            readonly properties: {
                                readonly next_key: {
                                    readonly type: "string";
                                    readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly total: {
                                    readonly type: "string";
                                    readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Response";
                            readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.incentives.Gauge": {
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "id is the unique ID of a Gauge";
                                };
                                readonly is_perpetual: {
                                    readonly type: "boolean";
                                    readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                };
                                readonly distribute_to: {
                                    readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                    readonly additionalProperties: true;
                                    readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                };
                                readonly start_time: {
                                    readonly type: "string";
                                    readonly description: "start_time is the distribution start time";
                                    readonly format: "date-time";
                                };
                                readonly num_epochs_paid_over: {
                                    readonly type: "string";
                                    readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                };
                                readonly filled_epochs: {
                                    readonly type: "string";
                                    readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                };
                                readonly distributed_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "distributed_coins are coins that have been distributed already";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauge";
                            readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                        };
                        readonly "osmosis.lockup.QueryCondition": {
                            readonly properties: {
                                readonly lock_query_type: {
                                    readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                    readonly title: "Lock Query Type";
                                    readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "Denom represents the token denomination we are looking to lock up";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                    readonly format: "regex";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Condition";
                            readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/GaugesResponse";
                        readonly definitions: {
                            readonly GaugesResponse: {
                                readonly properties: {
                                    readonly data: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                        };
                                        readonly type: "array";
                                        readonly description: "Upcoming and active gauges";
                                    };
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the response";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauges Response";
                            };
                            readonly "cosmos.base.query.v1beta1.PageResponse": {
                                readonly properties: {
                                    readonly next_key: {
                                        readonly type: "string";
                                        readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly total: {
                                        readonly type: "string";
                                        readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Response";
                                readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.incentives.Gauge": {
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "id is the unique ID of a Gauge";
                                    };
                                    readonly is_perpetual: {
                                        readonly type: "boolean";
                                        readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                    };
                                    readonly distribute_to: {
                                        readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                        readonly additionalProperties: true;
                                        readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly description: "start_time is the distribution start time";
                                        readonly format: "date-time";
                                    };
                                    readonly num_epochs_paid_over: {
                                        readonly type: "string";
                                        readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                    };
                                    readonly filled_epochs: {
                                        readonly type: "string";
                                        readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                    };
                                    readonly distributed_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "distributed_coins are coins that have been distributed already";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge";
                                readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                            };
                            readonly "osmosis.lockup.QueryCondition": {
                                readonly properties: {
                                    readonly lock_query_type: {
                                        readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Lock Query Type";
                                        readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Denom represents the token denomination we are looking to lock up";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                        readonly format: "regex";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Condition";
                                readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                            };
                        };
                    };
                };
                readonly ModuleDistributedCoinsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ModuleDistributedCoinsRequest";
                    readonly definitions: {
                        readonly ModuleDistributedCoinsRequest: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Module Distributed Coins Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ModuleDistributedCoinsRequest";
                        readonly definitions: {
                            readonly ModuleDistributedCoinsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Module Distributed Coins Request";
                            };
                        };
                    };
                };
                readonly ModuleDistributedCoinsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ModuleDistributedCoinsResponse";
                    readonly definitions: {
                        readonly ModuleDistributedCoinsResponse: {
                            readonly properties: {
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins that have been distributed already";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Module Distributed Coins Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ModuleDistributedCoinsResponse";
                        readonly definitions: {
                            readonly ModuleDistributedCoinsResponse: {
                                readonly properties: {
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins that have been distributed already";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Module Distributed Coins Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly ModuleToDistributeCoinsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ModuleToDistributeCoinsRequest";
                    readonly definitions: {
                        readonly ModuleToDistributeCoinsRequest: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Module To Distribute Coins Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ModuleToDistributeCoinsRequest";
                        readonly definitions: {
                            readonly ModuleToDistributeCoinsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Module To Distribute Coins Request";
                            };
                        };
                    };
                };
                readonly ModuleToDistributeCoinsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ModuleToDistributeCoinsResponse";
                    readonly definitions: {
                        readonly ModuleToDistributeCoinsResponse: {
                            readonly properties: {
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins that have yet to be distributed";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Module To Distribute Coins Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ModuleToDistributeCoinsResponse";
                        readonly definitions: {
                            readonly ModuleToDistributeCoinsResponse: {
                                readonly properties: {
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins that have yet to be distributed";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Module To Distribute Coins Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly MsgAddToGauge: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgAddToGauge";
                    readonly definitions: {
                        readonly MsgAddToGauge: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "owner is the gauge owner's address";
                                };
                                readonly gauge_id: {
                                    readonly type: "string";
                                    readonly description: "gauge_id is the ID of gauge that rewards are getting added to";
                                };
                                readonly rewards: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "rewards are the coin(s) to add to gauge";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Add To Gauge";
                            readonly description: "MsgAddToGauge adds coins to a previously created gauge";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgAddToGauge";
                        readonly definitions: {
                            readonly MsgAddToGauge: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "owner is the gauge owner's address";
                                    };
                                    readonly gauge_id: {
                                        readonly type: "string";
                                        readonly description: "gauge_id is the ID of gauge that rewards are getting added to";
                                    };
                                    readonly rewards: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "rewards are the coin(s) to add to gauge";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Add To Gauge";
                                readonly description: "MsgAddToGauge adds coins to a previously created gauge";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly MsgAddToGaugeResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgAddToGaugeResponse";
                    readonly definitions: {
                        readonly MsgAddToGaugeResponse: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Add To Gauge Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgAddToGaugeResponse";
                        readonly definitions: {
                            readonly MsgAddToGaugeResponse: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Add To Gauge Response";
                            };
                        };
                    };
                };
                readonly MsgCreateGauge: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgCreateGauge";
                    readonly definitions: {
                        readonly MsgCreateGauge: {
                            readonly properties: {
                                readonly is_perpetual: {
                                    readonly type: "boolean";
                                    readonly description: "is_perpetual shows if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "owner is the address of gauge creator";
                                };
                                readonly distribute_to: {
                                    readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                    readonly additionalProperties: true;
                                    readonly description: "distribute_to show which lock the gauge should distribute to by time duration or by timestamp";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "coins are coin(s) to be distributed by the gauge";
                                };
                                readonly start_time: {
                                    readonly type: "string";
                                    readonly description: "start_time is the distribution start time";
                                    readonly format: "date-time";
                                };
                                readonly num_epochs_paid_over: {
                                    readonly type: "string";
                                    readonly description: "num_epochs_paid_over is the number of epochs distribution will be completed over";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Create Gauge";
                            readonly description: "MsgCreateGauge creates a gague to distribute rewards to users";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.QueryCondition": {
                            readonly properties: {
                                readonly lock_query_type: {
                                    readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                    readonly title: "Lock Query Type";
                                    readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "Denom represents the token denomination we are looking to lock up";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                    readonly format: "regex";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Condition";
                            readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgCreateGauge";
                        readonly definitions: {
                            readonly MsgCreateGauge: {
                                readonly properties: {
                                    readonly is_perpetual: {
                                        readonly type: "boolean";
                                        readonly description: "is_perpetual shows if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "owner is the address of gauge creator";
                                    };
                                    readonly distribute_to: {
                                        readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                        readonly additionalProperties: true;
                                        readonly description: "distribute_to show which lock the gauge should distribute to by time duration or by timestamp";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "coins are coin(s) to be distributed by the gauge";
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly description: "start_time is the distribution start time";
                                        readonly format: "date-time";
                                    };
                                    readonly num_epochs_paid_over: {
                                        readonly type: "string";
                                        readonly description: "num_epochs_paid_over is the number of epochs distribution will be completed over";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Create Gauge";
                                readonly description: "MsgCreateGauge creates a gague to distribute rewards to users";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.QueryCondition": {
                                readonly properties: {
                                    readonly lock_query_type: {
                                        readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Lock Query Type";
                                        readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Denom represents the token denomination we are looking to lock up";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                        readonly format: "regex";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Condition";
                                readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                            };
                        };
                    };
                };
                readonly MsgCreateGaugeResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgCreateGaugeResponse";
                    readonly definitions: {
                        readonly MsgCreateGaugeResponse: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Create Gauge Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgCreateGaugeResponse";
                        readonly definitions: {
                            readonly MsgCreateGaugeResponse: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Create Gauge Response";
                            };
                        };
                    };
                };
                readonly QueryLockableDurationsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryLockableDurationsRequest";
                    readonly definitions: {
                        readonly QueryLockableDurationsRequest: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Lockable Durations Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryLockableDurationsRequest";
                        readonly definitions: {
                            readonly QueryLockableDurationsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Lockable Durations Request";
                            };
                        };
                    };
                };
                readonly QueryLockableDurationsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryLockableDurationsResponse";
                    readonly definitions: {
                        readonly QueryLockableDurationsResponse: {
                            readonly properties: {
                                readonly lockable_durations: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly type: "array";
                                    readonly description: "Time durations that users can lock coins for in order to recieve rewards";
                                    readonly format: "regex";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Lockable Durations Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryLockableDurationsResponse";
                        readonly definitions: {
                            readonly QueryLockableDurationsResponse: {
                                readonly properties: {
                                    readonly lockable_durations: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly type: "array";
                                        readonly description: "Time durations that users can lock coins for in order to recieve rewards";
                                        readonly format: "regex";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Lockable Durations Response";
                            };
                        };
                    };
                };
                readonly RewardsEstRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/RewardsEstRequest";
                    readonly definitions: {
                        readonly RewardsEstRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Address that is being queried for future estimated rewards";
                                };
                                readonly lock_ids: {
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly type: "array";
                                    readonly description: "Lock IDs included in future reward estimation";
                                };
                                readonly end_epoch: {
                                    readonly type: "string";
                                    readonly description: "Upper time limit of reward estimation Lower limit is current epoch";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Rewards Est Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/RewardsEstRequest";
                        readonly definitions: {
                            readonly RewardsEstRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Address that is being queried for future estimated rewards";
                                    };
                                    readonly lock_ids: {
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly type: "array";
                                        readonly description: "Lock IDs included in future reward estimation";
                                    };
                                    readonly end_epoch: {
                                        readonly type: "string";
                                        readonly description: "Upper time limit of reward estimation Lower limit is current epoch";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Rewards Est Request";
                            };
                        };
                    };
                };
                readonly RewardsEstResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/RewardsEstResponse";
                    readonly definitions: {
                        readonly RewardsEstResponse: {
                            readonly properties: {
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Estimated coin rewards that will be recieved at provided address from specified locks between current time and end epoch";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Rewards Est Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/RewardsEstResponse";
                        readonly definitions: {
                            readonly RewardsEstResponse: {
                                readonly properties: {
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Estimated coin rewards that will be recieved at provided address from specified locks between current time and end epoch";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Rewards Est Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly UpcomingGaugesPerDenomRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/UpcomingGaugesPerDenomRequest";
                    readonly definitions: {
                        readonly UpcomingGaugesPerDenomRequest: {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "Filter for upcoming gagues that match specific denom";
                                };
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the request";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Upcoming Gauges Per Denom Request";
                        };
                        readonly "cosmos.base.query.v1beta1.PageRequest": {
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                    readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly offset: {
                                    readonly type: "string";
                                    readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                };
                                readonly limit: {
                                    readonly type: "string";
                                    readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                };
                                readonly count_total: {
                                    readonly type: "boolean";
                                    readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                };
                                readonly reverse: {
                                    readonly type: "boolean";
                                    readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Request";
                            readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/UpcomingGaugesPerDenomRequest";
                        readonly definitions: {
                            readonly UpcomingGaugesPerDenomRequest: {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Filter for upcoming gagues that match specific denom";
                                    };
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the request";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Upcoming Gauges Per Denom Request";
                            };
                            readonly "cosmos.base.query.v1beta1.PageRequest": {
                                readonly properties: {
                                    readonly key: {
                                        readonly type: "string";
                                        readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly offset: {
                                        readonly type: "string";
                                        readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                    };
                                    readonly limit: {
                                        readonly type: "string";
                                        readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                    };
                                    readonly count_total: {
                                        readonly type: "boolean";
                                        readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                    };
                                    readonly reverse: {
                                        readonly type: "boolean";
                                        readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Request";
                                readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                            };
                        };
                    };
                };
                readonly UpcomingGaugesPerDenomResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/UpcomingGaugesPerDenomResponse";
                    readonly definitions: {
                        readonly UpcomingGaugesPerDenomResponse: {
                            readonly properties: {
                                readonly upcoming_gauges: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                    };
                                    readonly type: "array";
                                    readonly description: "Upcoming gagues that match denom in query";
                                };
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the response";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Upcoming Gauges Per Denom Response";
                        };
                        readonly "cosmos.base.query.v1beta1.PageResponse": {
                            readonly properties: {
                                readonly next_key: {
                                    readonly type: "string";
                                    readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly total: {
                                    readonly type: "string";
                                    readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Response";
                            readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.incentives.Gauge": {
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "id is the unique ID of a Gauge";
                                };
                                readonly is_perpetual: {
                                    readonly type: "boolean";
                                    readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                };
                                readonly distribute_to: {
                                    readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                    readonly additionalProperties: true;
                                    readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                };
                                readonly start_time: {
                                    readonly type: "string";
                                    readonly description: "start_time is the distribution start time";
                                    readonly format: "date-time";
                                };
                                readonly num_epochs_paid_over: {
                                    readonly type: "string";
                                    readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                };
                                readonly filled_epochs: {
                                    readonly type: "string";
                                    readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                };
                                readonly distributed_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "distributed_coins are coins that have been distributed already";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauge";
                            readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                        };
                        readonly "osmosis.lockup.QueryCondition": {
                            readonly properties: {
                                readonly lock_query_type: {
                                    readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                    readonly title: "Lock Query Type";
                                    readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "Denom represents the token denomination we are looking to lock up";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                    readonly format: "regex";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Condition";
                            readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/UpcomingGaugesPerDenomResponse";
                        readonly definitions: {
                            readonly UpcomingGaugesPerDenomResponse: {
                                readonly properties: {
                                    readonly upcoming_gauges: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                        };
                                        readonly type: "array";
                                        readonly description: "Upcoming gagues that match denom in query";
                                    };
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the response";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Upcoming Gauges Per Denom Response";
                            };
                            readonly "cosmos.base.query.v1beta1.PageResponse": {
                                readonly properties: {
                                    readonly next_key: {
                                        readonly type: "string";
                                        readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly total: {
                                        readonly type: "string";
                                        readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Response";
                                readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.incentives.Gauge": {
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "id is the unique ID of a Gauge";
                                    };
                                    readonly is_perpetual: {
                                        readonly type: "boolean";
                                        readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                    };
                                    readonly distribute_to: {
                                        readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                        readonly additionalProperties: true;
                                        readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly description: "start_time is the distribution start time";
                                        readonly format: "date-time";
                                    };
                                    readonly num_epochs_paid_over: {
                                        readonly type: "string";
                                        readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                    };
                                    readonly filled_epochs: {
                                        readonly type: "string";
                                        readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                    };
                                    readonly distributed_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "distributed_coins are coins that have been distributed already";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge";
                                readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                            };
                            readonly "osmosis.lockup.QueryCondition": {
                                readonly properties: {
                                    readonly lock_query_type: {
                                        readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Lock Query Type";
                                        readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Denom represents the token denomination we are looking to lock up";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                        readonly format: "regex";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Condition";
                                readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                            };
                        };
                    };
                };
                readonly UpcomingGaugesRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/UpcomingGaugesRequest";
                    readonly definitions: {
                        readonly UpcomingGaugesRequest: {
                            readonly properties: {
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the request";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Upcoming Gauges Request";
                        };
                        readonly "cosmos.base.query.v1beta1.PageRequest": {
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                    readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly offset: {
                                    readonly type: "string";
                                    readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                };
                                readonly limit: {
                                    readonly type: "string";
                                    readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                };
                                readonly count_total: {
                                    readonly type: "boolean";
                                    readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                };
                                readonly reverse: {
                                    readonly type: "boolean";
                                    readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Request";
                            readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/UpcomingGaugesRequest";
                        readonly definitions: {
                            readonly UpcomingGaugesRequest: {
                                readonly properties: {
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the request";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Upcoming Gauges Request";
                            };
                            readonly "cosmos.base.query.v1beta1.PageRequest": {
                                readonly properties: {
                                    readonly key: {
                                        readonly type: "string";
                                        readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly offset: {
                                        readonly type: "string";
                                        readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                    };
                                    readonly limit: {
                                        readonly type: "string";
                                        readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                    };
                                    readonly count_total: {
                                        readonly type: "boolean";
                                        readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                    };
                                    readonly reverse: {
                                        readonly type: "boolean";
                                        readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Request";
                                readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                            };
                        };
                    };
                };
                readonly UpcomingGaugesResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/UpcomingGaugesResponse";
                    readonly definitions: {
                        readonly UpcomingGaugesResponse: {
                            readonly properties: {
                                readonly data: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                    };
                                    readonly type: "array";
                                    readonly description: "Gauges whose distribution is upcoming";
                                };
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                    readonly additionalProperties: true;
                                    readonly description: "Pagination defines pagination for the response";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Upcoming Gauges Response";
                        };
                        readonly "cosmos.base.query.v1beta1.PageResponse": {
                            readonly properties: {
                                readonly next_key: {
                                    readonly type: "string";
                                    readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly total: {
                                    readonly type: "string";
                                    readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Response";
                            readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.incentives.Gauge": {
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "id is the unique ID of a Gauge";
                                };
                                readonly is_perpetual: {
                                    readonly type: "boolean";
                                    readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                };
                                readonly distribute_to: {
                                    readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                    readonly additionalProperties: true;
                                    readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                };
                                readonly start_time: {
                                    readonly type: "string";
                                    readonly description: "start_time is the distribution start time";
                                    readonly format: "date-time";
                                };
                                readonly num_epochs_paid_over: {
                                    readonly type: "string";
                                    readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                };
                                readonly filled_epochs: {
                                    readonly type: "string";
                                    readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                };
                                readonly distributed_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "distributed_coins are coins that have been distributed already";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Gauge";
                            readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                        };
                        readonly "osmosis.lockup.QueryCondition": {
                            readonly properties: {
                                readonly lock_query_type: {
                                    readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                    readonly title: "Lock Query Type";
                                    readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "Denom represents the token denomination we are looking to lock up";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                    readonly format: "regex";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Condition";
                            readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/UpcomingGaugesResponse";
                        readonly definitions: {
                            readonly UpcomingGaugesResponse: {
                                readonly properties: {
                                    readonly data: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                        };
                                        readonly type: "array";
                                        readonly description: "Gauges whose distribution is upcoming";
                                    };
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                        readonly additionalProperties: true;
                                        readonly description: "Pagination defines pagination for the response";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Upcoming Gauges Response";
                            };
                            readonly "cosmos.base.query.v1beta1.PageResponse": {
                                readonly properties: {
                                    readonly next_key: {
                                        readonly type: "string";
                                        readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly total: {
                                        readonly type: "string";
                                        readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Response";
                                readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.incentives.Gauge": {
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "id is the unique ID of a Gauge";
                                    };
                                    readonly is_perpetual: {
                                        readonly type: "boolean";
                                        readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                    };
                                    readonly distribute_to: {
                                        readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                        readonly additionalProperties: true;
                                        readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly description: "start_time is the distribution start time";
                                        readonly format: "date-time";
                                    };
                                    readonly num_epochs_paid_over: {
                                        readonly type: "string";
                                        readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                    };
                                    readonly filled_epochs: {
                                        readonly type: "string";
                                        readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                    };
                                    readonly distributed_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "distributed_coins are coins that have been distributed already";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge";
                                readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                            };
                            readonly "osmosis.lockup.QueryCondition": {
                                readonly properties: {
                                    readonly lock_query_type: {
                                        readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Lock Query Type";
                                        readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Denom represents the token denomination we are looking to lock up";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                        readonly format: "regex";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Condition";
                                readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                            };
                        };
                    };
                };
            };
            readonly lockup: {
                readonly AccountLockedCoinsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedCoinsRequest";
                    readonly definitions: {
                        readonly AccountLockedCoinsRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Coins Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedCoinsRequest";
                        readonly definitions: {
                            readonly AccountLockedCoinsRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Coins Request";
                            };
                        };
                    };
                };
                readonly AccountLockedCoinsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedCoinsResponse";
                    readonly definitions: {
                        readonly AccountLockedCoinsResponse: {
                            readonly properties: {
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Coins Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedCoinsResponse";
                        readonly definitions: {
                            readonly AccountLockedCoinsResponse: {
                                readonly properties: {
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Coins Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly AccountLockedDurationRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedDurationRequest";
                    readonly definitions: {
                        readonly AccountLockedDurationRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly format: "regex";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Duration Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedDurationRequest";
                        readonly definitions: {
                            readonly AccountLockedDurationRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly format: "regex";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Duration Request";
                            };
                        };
                    };
                };
                readonly AccountLockedDurationResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedDurationResponse";
                    readonly definitions: {
                        readonly AccountLockedDurationResponse: {
                            readonly properties: {
                                readonly locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Duration Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedDurationResponse";
                        readonly definitions: {
                            readonly AccountLockedDurationResponse: {
                                readonly properties: {
                                    readonly locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Duration Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly AccountLockedLongerDurationDenomRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedLongerDurationDenomRequest";
                    readonly definitions: {
                        readonly AccountLockedLongerDurationDenomRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly format: "regex";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Longer Duration Denom Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedLongerDurationDenomRequest";
                        readonly definitions: {
                            readonly AccountLockedLongerDurationDenomRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly format: "regex";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Longer Duration Denom Request";
                            };
                        };
                    };
                };
                readonly AccountLockedLongerDurationDenomResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedLongerDurationDenomResponse";
                    readonly definitions: {
                        readonly AccountLockedLongerDurationDenomResponse: {
                            readonly properties: {
                                readonly locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Longer Duration Denom Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedLongerDurationDenomResponse";
                        readonly definitions: {
                            readonly AccountLockedLongerDurationDenomResponse: {
                                readonly properties: {
                                    readonly locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Longer Duration Denom Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly AccountLockedLongerDurationNotUnlockingOnlyRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedLongerDurationNotUnlockingOnlyRequest";
                    readonly definitions: {
                        readonly AccountLockedLongerDurationNotUnlockingOnlyRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly format: "regex";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Longer Duration Not Unlocking Only Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedLongerDurationNotUnlockingOnlyRequest";
                        readonly definitions: {
                            readonly AccountLockedLongerDurationNotUnlockingOnlyRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly format: "regex";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Longer Duration Not Unlocking Only Request";
                            };
                        };
                    };
                };
                readonly AccountLockedLongerDurationNotUnlockingOnlyResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedLongerDurationNotUnlockingOnlyResponse";
                    readonly definitions: {
                        readonly AccountLockedLongerDurationNotUnlockingOnlyResponse: {
                            readonly properties: {
                                readonly locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Longer Duration Not Unlocking Only Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedLongerDurationNotUnlockingOnlyResponse";
                        readonly definitions: {
                            readonly AccountLockedLongerDurationNotUnlockingOnlyResponse: {
                                readonly properties: {
                                    readonly locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Longer Duration Not Unlocking Only Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly AccountLockedLongerDurationRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedLongerDurationRequest";
                    readonly definitions: {
                        readonly AccountLockedLongerDurationRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly format: "regex";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Longer Duration Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedLongerDurationRequest";
                        readonly definitions: {
                            readonly AccountLockedLongerDurationRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly format: "regex";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Longer Duration Request";
                            };
                        };
                    };
                };
                readonly AccountLockedLongerDurationResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedLongerDurationResponse";
                    readonly definitions: {
                        readonly AccountLockedLongerDurationResponse: {
                            readonly properties: {
                                readonly locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Longer Duration Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedLongerDurationResponse";
                        readonly definitions: {
                            readonly AccountLockedLongerDurationResponse: {
                                readonly properties: {
                                    readonly locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Longer Duration Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly AccountLockedPastTimeDenomRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedPastTimeDenomRequest";
                    readonly definitions: {
                        readonly AccountLockedPastTimeDenomRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Past Time Denom Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedPastTimeDenomRequest";
                        readonly definitions: {
                            readonly AccountLockedPastTimeDenomRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Past Time Denom Request";
                            };
                        };
                    };
                };
                readonly AccountLockedPastTimeDenomResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedPastTimeDenomResponse";
                    readonly definitions: {
                        readonly AccountLockedPastTimeDenomResponse: {
                            readonly properties: {
                                readonly locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Past Time Denom Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedPastTimeDenomResponse";
                        readonly definitions: {
                            readonly AccountLockedPastTimeDenomResponse: {
                                readonly properties: {
                                    readonly locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Past Time Denom Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly AccountLockedPastTimeNotUnlockingOnlyRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedPastTimeNotUnlockingOnlyRequest";
                    readonly definitions: {
                        readonly AccountLockedPastTimeNotUnlockingOnlyRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Past Time Not Unlocking Only Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedPastTimeNotUnlockingOnlyRequest";
                        readonly definitions: {
                            readonly AccountLockedPastTimeNotUnlockingOnlyRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Past Time Not Unlocking Only Request";
                            };
                        };
                    };
                };
                readonly AccountLockedPastTimeNotUnlockingOnlyResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedPastTimeNotUnlockingOnlyResponse";
                    readonly definitions: {
                        readonly AccountLockedPastTimeNotUnlockingOnlyResponse: {
                            readonly properties: {
                                readonly locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Past Time Not Unlocking Only Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedPastTimeNotUnlockingOnlyResponse";
                        readonly definitions: {
                            readonly AccountLockedPastTimeNotUnlockingOnlyResponse: {
                                readonly properties: {
                                    readonly locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Past Time Not Unlocking Only Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly AccountLockedPastTimeRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedPastTimeRequest";
                    readonly definitions: {
                        readonly AccountLockedPastTimeRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Past Time Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedPastTimeRequest";
                        readonly definitions: {
                            readonly AccountLockedPastTimeRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Past Time Request";
                            };
                        };
                    };
                };
                readonly AccountLockedPastTimeResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountLockedPastTimeResponse";
                    readonly definitions: {
                        readonly AccountLockedPastTimeResponse: {
                            readonly properties: {
                                readonly locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Locked Past Time Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountLockedPastTimeResponse";
                        readonly definitions: {
                            readonly AccountLockedPastTimeResponse: {
                                readonly properties: {
                                    readonly locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Locked Past Time Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly AccountUnlockableCoinsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountUnlockableCoinsRequest";
                    readonly definitions: {
                        readonly AccountUnlockableCoinsRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Unlockable Coins Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountUnlockableCoinsRequest";
                        readonly definitions: {
                            readonly AccountUnlockableCoinsRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Unlockable Coins Request";
                            };
                        };
                    };
                };
                readonly AccountUnlockableCoinsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountUnlockableCoinsResponse";
                    readonly definitions: {
                        readonly AccountUnlockableCoinsResponse: {
                            readonly properties: {
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Unlockable Coins Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountUnlockableCoinsResponse";
                        readonly definitions: {
                            readonly AccountUnlockableCoinsResponse: {
                                readonly properties: {
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Unlockable Coins Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly AccountUnlockedBeforeTimeRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountUnlockedBeforeTimeRequest";
                    readonly definitions: {
                        readonly AccountUnlockedBeforeTimeRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Unlocked Before Time Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountUnlockedBeforeTimeRequest";
                        readonly definitions: {
                            readonly AccountUnlockedBeforeTimeRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Unlocked Before Time Request";
                            };
                        };
                    };
                };
                readonly AccountUnlockedBeforeTimeResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountUnlockedBeforeTimeResponse";
                    readonly definitions: {
                        readonly AccountUnlockedBeforeTimeResponse: {
                            readonly properties: {
                                readonly locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Unlocked Before Time Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountUnlockedBeforeTimeResponse";
                        readonly definitions: {
                            readonly AccountUnlockedBeforeTimeResponse: {
                                readonly properties: {
                                    readonly locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Unlocked Before Time Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly AccountUnlockingCoinsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountUnlockingCoinsRequest";
                    readonly definitions: {
                        readonly AccountUnlockingCoinsRequest: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Unlocking Coins Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountUnlockingCoinsRequest";
                        readonly definitions: {
                            readonly AccountUnlockingCoinsRequest: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Unlocking Coins Request";
                            };
                        };
                    };
                };
                readonly AccountUnlockingCoinsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AccountUnlockingCoinsResponse";
                    readonly definitions: {
                        readonly AccountUnlockingCoinsResponse: {
                            readonly properties: {
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Account Unlocking Coins Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AccountUnlockingCoinsResponse";
                        readonly definitions: {
                            readonly AccountUnlockingCoinsResponse: {
                                readonly properties: {
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Account Unlocking Coins Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly LockedDenomRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/LockedDenomRequest";
                    readonly definitions: {
                        readonly LockedDenomRequest: {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly format: "regex";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Locked Denom Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/LockedDenomRequest";
                        readonly definitions: {
                            readonly LockedDenomRequest: {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly format: "regex";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Locked Denom Request";
                            };
                        };
                    };
                };
                readonly LockedDenomResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/LockedDenomResponse";
                    readonly definitions: {
                        readonly LockedDenomResponse: {
                            readonly properties: {
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Locked Denom Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/LockedDenomResponse";
                        readonly definitions: {
                            readonly LockedDenomResponse: {
                                readonly properties: {
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Locked Denom Response";
                            };
                        };
                    };
                };
                readonly LockedRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/LockedRequest";
                    readonly definitions: {
                        readonly LockedRequest: {
                            readonly properties: {
                                readonly lock_id: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Locked Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/LockedRequest";
                        readonly definitions: {
                            readonly LockedRequest: {
                                readonly properties: {
                                    readonly lock_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Locked Request";
                            };
                        };
                    };
                };
                readonly LockedResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/LockedResponse";
                    readonly definitions: {
                        readonly LockedResponse: {
                            readonly properties: {
                                readonly lock: {
                                    readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Locked Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/LockedResponse";
                        readonly definitions: {
                            readonly LockedResponse: {
                                readonly properties: {
                                    readonly lock: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Locked Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly ModuleBalanceRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ModuleBalanceRequest";
                    readonly definitions: {
                        readonly ModuleBalanceRequest: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Module Balance Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ModuleBalanceRequest";
                        readonly definitions: {
                            readonly ModuleBalanceRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Module Balance Request";
                            };
                        };
                    };
                };
                readonly ModuleBalanceResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ModuleBalanceResponse";
                    readonly definitions: {
                        readonly ModuleBalanceResponse: {
                            readonly properties: {
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Module Balance Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ModuleBalanceResponse";
                        readonly definitions: {
                            readonly ModuleBalanceResponse: {
                                readonly properties: {
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Module Balance Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly ModuleLockedAmountRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ModuleLockedAmountRequest";
                    readonly definitions: {
                        readonly ModuleLockedAmountRequest: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Module Locked Amount Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ModuleLockedAmountRequest";
                        readonly definitions: {
                            readonly ModuleLockedAmountRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Module Locked Amount Request";
                            };
                        };
                    };
                };
                readonly ModuleLockedAmountResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ModuleLockedAmountResponse";
                    readonly definitions: {
                        readonly ModuleLockedAmountResponse: {
                            readonly properties: {
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Module Locked Amount Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ModuleLockedAmountResponse";
                        readonly definitions: {
                            readonly ModuleLockedAmountResponse: {
                                readonly properties: {
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Module Locked Amount Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly MsgBeginUnlocking: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgBeginUnlocking";
                    readonly definitions: {
                        readonly MsgBeginUnlocking: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly ID: {
                                    readonly type: "string";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Amount of unlocking coins. Unlock all if not set.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Begin Unlocking";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgBeginUnlocking";
                        readonly definitions: {
                            readonly MsgBeginUnlocking: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly ID: {
                                        readonly type: "string";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Amount of unlocking coins. Unlock all if not set.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Begin Unlocking";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly MsgBeginUnlockingAll: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgBeginUnlockingAll";
                    readonly definitions: {
                        readonly MsgBeginUnlockingAll: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Begin Unlocking All";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgBeginUnlockingAll";
                        readonly definitions: {
                            readonly MsgBeginUnlockingAll: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Begin Unlocking All";
                            };
                        };
                    };
                };
                readonly MsgBeginUnlockingAllResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgBeginUnlockingAllResponse";
                    readonly definitions: {
                        readonly MsgBeginUnlockingAllResponse: {
                            readonly properties: {
                                readonly unlocks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Begin Unlocking All Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.PeriodLock": {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                    readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                    readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                    readonly format: "regex";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                    readonly format: "date-time";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                    readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Period Lock";
                            readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgBeginUnlockingAllResponse";
                        readonly definitions: {
                            readonly MsgBeginUnlockingAllResponse: {
                                readonly properties: {
                                    readonly unlocks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.PeriodLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Begin Unlocking All Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.PeriodLock": {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly description: "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock.";
                                    };
                                    readonly owner: {
                                        readonly type: "string";
                                        readonly description: "Owner is the account address of the lock owner. Only the owner can modify the state of the lock.";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the time needed for a lock to mature after unlocking has started.";
                                        readonly format: "regex";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.";
                                        readonly format: "date-time";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "Coins are the tokens locked within the lock, kept in the module account.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Period Lock";
                                readonly description: "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started.";
                            };
                        };
                    };
                };
                readonly MsgBeginUnlockingResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgBeginUnlockingResponse";
                    readonly definitions: {
                        readonly MsgBeginUnlockingResponse: {
                            readonly properties: {
                                readonly success: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Begin Unlocking Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgBeginUnlockingResponse";
                        readonly definitions: {
                            readonly MsgBeginUnlockingResponse: {
                                readonly properties: {
                                    readonly success: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Begin Unlocking Response";
                            };
                        };
                    };
                };
                readonly MsgExtendLockup: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgExtendLockup";
                    readonly definitions: {
                        readonly MsgExtendLockup: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly ID: {
                                    readonly type: "string";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "duration to be set. fails if lower than the current duration, or is unlocking";
                                    readonly format: "regex";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Extend Lockup";
                            readonly description: "MsgExtendLockup extends the existing lockup's duration. The new duration is longer than the original.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgExtendLockup";
                        readonly definitions: {
                            readonly MsgExtendLockup: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly ID: {
                                        readonly type: "string";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "duration to be set. fails if lower than the current duration, or is unlocking";
                                        readonly format: "regex";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Extend Lockup";
                                readonly description: "MsgExtendLockup extends the existing lockup's duration. The new duration is longer than the original.";
                            };
                        };
                    };
                };
                readonly MsgExtendLockupResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgExtendLockupResponse";
                    readonly definitions: {
                        readonly MsgExtendLockupResponse: {
                            readonly properties: {
                                readonly success: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Extend Lockup Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgExtendLockupResponse";
                        readonly definitions: {
                            readonly MsgExtendLockupResponse: {
                                readonly properties: {
                                    readonly success: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Extend Lockup Response";
                            };
                        };
                    };
                };
                readonly MsgLockTokens: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgLockTokens";
                    readonly definitions: {
                        readonly MsgLockTokens: {
                            readonly properties: {
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly format: "regex";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Lock Tokens";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgLockTokens";
                        readonly definitions: {
                            readonly MsgLockTokens: {
                                readonly properties: {
                                    readonly owner: {
                                        readonly type: "string";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly format: "regex";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Lock Tokens";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly MsgLockTokensResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgLockTokensResponse";
                    readonly definitions: {
                        readonly MsgLockTokensResponse: {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Lock Tokens Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgLockTokensResponse";
                        readonly definitions: {
                            readonly MsgLockTokensResponse: {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Lock Tokens Response";
                            };
                        };
                    };
                };
                readonly SyntheticLockupsByLockupIDRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SyntheticLockupsByLockupIDRequest";
                    readonly definitions: {
                        readonly SyntheticLockupsByLockupIDRequest: {
                            readonly properties: {
                                readonly lock_id: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Synthetic Lockups By Lockup ID Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SyntheticLockupsByLockupIDRequest";
                        readonly definitions: {
                            readonly SyntheticLockupsByLockupIDRequest: {
                                readonly properties: {
                                    readonly lock_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Synthetic Lockups By Lockup ID Request";
                            };
                        };
                    };
                };
                readonly SyntheticLockupsByLockupIDResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SyntheticLockupsByLockupIDResponse";
                    readonly definitions: {
                        readonly SyntheticLockupsByLockupIDResponse: {
                            readonly properties: {
                                readonly synthetic_locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.SyntheticLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Synthetic Lockups By Lockup ID Response";
                        };
                        readonly "osmosis.lockup.SyntheticLock": {
                            readonly properties: {
                                readonly underlying_lock_id: {
                                    readonly type: "string";
                                    readonly description: "Underlying Lock ID is the underlying native lock's id for this synthetic lockup. A synthetic lock MUST have an underlying lock.";
                                };
                                readonly synth_denom: {
                                    readonly type: "string";
                                    readonly description: "SynthDenom is the synthetic denom that is a combination of gamm share + bonding status + validator address.";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "used for unbonding synthetic lockups, for active synthetic lockups, this value is set to uninitialized value";
                                    readonly format: "date-time";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the duration for a synthetic lock to mature at the point of unbonding has started.";
                                    readonly format: "regex";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Synthetic Lock";
                            readonly description: "SyntheticLock is creating virtual lockup where new denom is combination of original denom and synthetic suffix. At the time of synthetic lockup creation and deletion, accumulation store is also being updated and on querier side, they can query as freely as native lockup.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SyntheticLockupsByLockupIDResponse";
                        readonly definitions: {
                            readonly SyntheticLockupsByLockupIDResponse: {
                                readonly properties: {
                                    readonly synthetic_locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.SyntheticLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Synthetic Lockups By Lockup ID Response";
                            };
                            readonly "osmosis.lockup.SyntheticLock": {
                                readonly properties: {
                                    readonly underlying_lock_id: {
                                        readonly type: "string";
                                        readonly description: "Underlying Lock ID is the underlying native lock's id for this synthetic lockup. A synthetic lock MUST have an underlying lock.";
                                    };
                                    readonly synth_denom: {
                                        readonly type: "string";
                                        readonly description: "SynthDenom is the synthetic denom that is a combination of gamm share + bonding status + validator address.";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "used for unbonding synthetic lockups, for active synthetic lockups, this value is set to uninitialized value";
                                        readonly format: "date-time";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the duration for a synthetic lock to mature at the point of unbonding has started.";
                                        readonly format: "regex";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Synthetic Lock";
                                readonly description: "SyntheticLock is creating virtual lockup where new denom is combination of original denom and synthetic suffix. At the time of synthetic lockup creation and deletion, accumulation store is also being updated and on querier side, they can query as freely as native lockup.";
                            };
                        };
                    };
                };
            };
            readonly mint: {
                readonly v1beta1: {
                    readonly QueryEpochProvisionsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryEpochProvisionsRequest";
                        readonly definitions: {
                            readonly QueryEpochProvisionsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Epoch Provisions Request";
                                readonly description: "QueryEpochProvisionsRequest is the request type for the Query/EpochProvisions RPC method.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryEpochProvisionsRequest";
                            readonly definitions: {
                                readonly QueryEpochProvisionsRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Epoch Provisions Request";
                                    readonly description: "QueryEpochProvisionsRequest is the request type for the Query/EpochProvisions RPC method.";
                                };
                            };
                        };
                    };
                    readonly QueryEpochProvisionsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryEpochProvisionsResponse";
                        readonly definitions: {
                            readonly QueryEpochProvisionsResponse: {
                                readonly properties: {
                                    readonly epoch_provisions: {
                                        readonly type: "string";
                                        readonly description: "epoch_provisions is the current minting per epoch provisions value.";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Epoch Provisions Response";
                                readonly description: "QueryEpochProvisionsResponse is the response type for the Query/EpochProvisions RPC method.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryEpochProvisionsResponse";
                            readonly definitions: {
                                readonly QueryEpochProvisionsResponse: {
                                    readonly properties: {
                                        readonly epoch_provisions: {
                                            readonly type: "string";
                                            readonly description: "epoch_provisions is the current minting per epoch provisions value.";
                                            readonly format: "binary";
                                            readonly binaryEncoding: "base64";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Epoch Provisions Response";
                                    readonly description: "QueryEpochProvisionsResponse is the response type for the Query/EpochProvisions RPC method.";
                                };
                            };
                        };
                    };
                    readonly QueryParamsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryParamsRequest";
                        readonly definitions: {
                            readonly QueryParamsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Params Request";
                                readonly description: "QueryParamsRequest is the request type for the Query/Params RPC method.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryParamsRequest";
                            readonly definitions: {
                                readonly QueryParamsRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Params Request";
                                    readonly description: "QueryParamsRequest is the request type for the Query/Params RPC method.";
                                };
                            };
                        };
                    };
                    readonly QueryParamsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryParamsResponse";
                        readonly definitions: {
                            readonly QueryParamsResponse: {
                                readonly properties: {
                                    readonly params: {
                                        readonly $ref: "#/definitions/osmosis.mint.v1beta1.Params";
                                        readonly additionalProperties: true;
                                        readonly description: "params defines the parameters of the module.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Params Response";
                                readonly description: "QueryParamsResponse is the response type for the Query/Params RPC method.";
                            };
                            readonly "osmosis.mint.v1beta1.DistributionProportions": {
                                readonly properties: {
                                    readonly staking: {
                                        readonly type: "string";
                                        readonly description: "staking defines the proportion of the minted mint_denom that is to be allocated as staking rewards.";
                                    };
                                    readonly pool_incentives: {
                                        readonly type: "string";
                                        readonly description: "pool_incentives defines the proportion of the minted mint_denom that is to be allocated as pool incentives.";
                                    };
                                    readonly developer_rewards: {
                                        readonly type: "string";
                                        readonly description: "developer_rewards defines the proportion of the minted mint_denom that is to be allocated to developer rewards address.";
                                    };
                                    readonly community_pool: {
                                        readonly type: "string";
                                        readonly description: "community_pool defines the proportion of the minted mint_denom that is to be allocated to the community pool.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Distribution Proportions";
                                readonly description: "DistributionProportions defines the distribution proportions of the minted denom. In other words, defines which stakeholders will receive the minted denoms and how much.";
                            };
                            readonly "osmosis.mint.v1beta1.Params": {
                                readonly properties: {
                                    readonly mint_denom: {
                                        readonly type: "string";
                                        readonly description: "mint_denom is the denom of the coin to mint.";
                                    };
                                    readonly genesis_epoch_provisions: {
                                        readonly type: "string";
                                        readonly description: "genesis_epoch_provisions epoch provisions from the first epoch.";
                                    };
                                    readonly epoch_identifier: {
                                        readonly type: "string";
                                        readonly description: "epoch_identifier mint epoch identifier e.g. (day, week).";
                                    };
                                    readonly reduction_period_in_epochs: {
                                        readonly type: "string";
                                        readonly description: "reduction_period_in_epochs the number of epochs it takes to reduce the rewards.";
                                    };
                                    readonly reduction_factor: {
                                        readonly type: "string";
                                        readonly description: "reduction_factor is the reduction multiplier to execute at the end of each period set by reduction_period_in_epochs.";
                                    };
                                    readonly distribution_proportions: {
                                        readonly $ref: "#/definitions/osmosis.mint.v1beta1.DistributionProportions";
                                        readonly additionalProperties: true;
                                        readonly description: "distribution_proportions defines the distribution proportions of the minted denom. In other words, defines which stakeholders will receive the minted denoms and how much.";
                                    };
                                    readonly weighted_developer_rewards_receivers: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.mint.v1beta1.WeightedAddress";
                                        };
                                        readonly type: "array";
                                        readonly description: "weighted_developer_rewards_receivers is the address to receive developer rewards with weights assignedt to each address. The final amount that each address receives is: epoch_provisions * distribution_proportions.developer_rewards * Address's Weight.";
                                    };
                                    readonly minting_rewards_distribution_start_epoch: {
                                        readonly type: "string";
                                        readonly description: "minting_rewards_distribution_start_epoch start epoch to distribute minting rewards";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Params";
                                readonly description: "Params holds parameters for the x/mint module.";
                            };
                            readonly "osmosis.mint.v1beta1.WeightedAddress": {
                                readonly properties: {
                                    readonly address: {
                                        readonly type: "string";
                                    };
                                    readonly weight: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Weighted Address";
                                readonly description: "WeightedAddress represents an address with a weight assigned to it. The weight is used to determine the proportion of the total minted tokens to be minted to the address.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryParamsResponse";
                            readonly definitions: {
                                readonly QueryParamsResponse: {
                                    readonly properties: {
                                        readonly params: {
                                            readonly $ref: "#/definitions/osmosis.mint.v1beta1.Params";
                                            readonly additionalProperties: true;
                                            readonly description: "params defines the parameters of the module.";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Params Response";
                                    readonly description: "QueryParamsResponse is the response type for the Query/Params RPC method.";
                                };
                                readonly "osmosis.mint.v1beta1.DistributionProportions": {
                                    readonly properties: {
                                        readonly staking: {
                                            readonly type: "string";
                                            readonly description: "staking defines the proportion of the minted mint_denom that is to be allocated as staking rewards.";
                                        };
                                        readonly pool_incentives: {
                                            readonly type: "string";
                                            readonly description: "pool_incentives defines the proportion of the minted mint_denom that is to be allocated as pool incentives.";
                                        };
                                        readonly developer_rewards: {
                                            readonly type: "string";
                                            readonly description: "developer_rewards defines the proportion of the minted mint_denom that is to be allocated to developer rewards address.";
                                        };
                                        readonly community_pool: {
                                            readonly type: "string";
                                            readonly description: "community_pool defines the proportion of the minted mint_denom that is to be allocated to the community pool.";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Distribution Proportions";
                                    readonly description: "DistributionProportions defines the distribution proportions of the minted denom. In other words, defines which stakeholders will receive the minted denoms and how much.";
                                };
                                readonly "osmosis.mint.v1beta1.Params": {
                                    readonly properties: {
                                        readonly mint_denom: {
                                            readonly type: "string";
                                            readonly description: "mint_denom is the denom of the coin to mint.";
                                        };
                                        readonly genesis_epoch_provisions: {
                                            readonly type: "string";
                                            readonly description: "genesis_epoch_provisions epoch provisions from the first epoch.";
                                        };
                                        readonly epoch_identifier: {
                                            readonly type: "string";
                                            readonly description: "epoch_identifier mint epoch identifier e.g. (day, week).";
                                        };
                                        readonly reduction_period_in_epochs: {
                                            readonly type: "string";
                                            readonly description: "reduction_period_in_epochs the number of epochs it takes to reduce the rewards.";
                                        };
                                        readonly reduction_factor: {
                                            readonly type: "string";
                                            readonly description: "reduction_factor is the reduction multiplier to execute at the end of each period set by reduction_period_in_epochs.";
                                        };
                                        readonly distribution_proportions: {
                                            readonly $ref: "#/definitions/osmosis.mint.v1beta1.DistributionProportions";
                                            readonly additionalProperties: true;
                                            readonly description: "distribution_proportions defines the distribution proportions of the minted denom. In other words, defines which stakeholders will receive the minted denoms and how much.";
                                        };
                                        readonly weighted_developer_rewards_receivers: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.mint.v1beta1.WeightedAddress";
                                            };
                                            readonly type: "array";
                                            readonly description: "weighted_developer_rewards_receivers is the address to receive developer rewards with weights assignedt to each address. The final amount that each address receives is: epoch_provisions * distribution_proportions.developer_rewards * Address's Weight.";
                                        };
                                        readonly minting_rewards_distribution_start_epoch: {
                                            readonly type: "string";
                                            readonly description: "minting_rewards_distribution_start_epoch start epoch to distribute minting rewards";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Params";
                                    readonly description: "Params holds parameters for the x/mint module.";
                                };
                                readonly "osmosis.mint.v1beta1.WeightedAddress": {
                                    readonly properties: {
                                        readonly address: {
                                            readonly type: "string";
                                        };
                                        readonly weight: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Weighted Address";
                                    readonly description: "WeightedAddress represents an address with a weight assigned to it. The weight is used to determine the proportion of the total minted tokens to be minted to the address.";
                                };
                            };
                        };
                    };
                };
            };
            readonly "pool-incentives": {
                readonly v1beta1: {
                    readonly IncentivizedPool: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/IncentivizedPool";
                        readonly definitions: {
                            readonly IncentivizedPool: {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly lockable_duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly format: "regex";
                                    };
                                    readonly gauge_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Incentivized Pool";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/IncentivizedPool";
                            readonly definitions: {
                                readonly IncentivizedPool: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly lockable_duration: {
                                            readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                            readonly type: "string";
                                            readonly format: "regex";
                                        };
                                        readonly gauge_id: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Incentivized Pool";
                                };
                            };
                        };
                    };
                    readonly QueryDistrInfoRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDistrInfoRequest";
                        readonly definitions: {
                            readonly QueryDistrInfoRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Distr Info Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDistrInfoRequest";
                            readonly definitions: {
                                readonly QueryDistrInfoRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Distr Info Request";
                                };
                            };
                        };
                    };
                    readonly QueryDistrInfoResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDistrInfoResponse";
                        readonly definitions: {
                            readonly QueryDistrInfoResponse: {
                                readonly properties: {
                                    readonly distr_info: {
                                        readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.DistrInfo";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Distr Info Response";
                            };
                            readonly "osmosis.poolincentives.v1beta1.DistrInfo": {
                                readonly properties: {
                                    readonly total_weight: {
                                        readonly type: "string";
                                    };
                                    readonly records: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.DistrRecord";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Distr Info";
                            };
                            readonly "osmosis.poolincentives.v1beta1.DistrRecord": {
                                readonly properties: {
                                    readonly gauge_id: {
                                        readonly type: "string";
                                    };
                                    readonly weight: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Distr Record";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDistrInfoResponse";
                            readonly definitions: {
                                readonly QueryDistrInfoResponse: {
                                    readonly properties: {
                                        readonly distr_info: {
                                            readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.DistrInfo";
                                            readonly additionalProperties: true;
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Distr Info Response";
                                };
                                readonly "osmosis.poolincentives.v1beta1.DistrInfo": {
                                    readonly properties: {
                                        readonly total_weight: {
                                            readonly type: "string";
                                        };
                                        readonly records: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.DistrRecord";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Distr Info";
                                };
                                readonly "osmosis.poolincentives.v1beta1.DistrRecord": {
                                    readonly properties: {
                                        readonly gauge_id: {
                                            readonly type: "string";
                                        };
                                        readonly weight: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Distr Record";
                                };
                            };
                        };
                    };
                    readonly QueryExternalIncentiveGaugesRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryExternalIncentiveGaugesRequest";
                        readonly definitions: {
                            readonly QueryExternalIncentiveGaugesRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query External Incentive Gauges Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryExternalIncentiveGaugesRequest";
                            readonly definitions: {
                                readonly QueryExternalIncentiveGaugesRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query External Incentive Gauges Request";
                                };
                            };
                        };
                    };
                    readonly QueryExternalIncentiveGaugesResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryExternalIncentiveGaugesResponse";
                        readonly definitions: {
                            readonly QueryExternalIncentiveGaugesResponse: {
                                readonly properties: {
                                    readonly data: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query External Incentive Gauges Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.incentives.Gauge": {
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "id is the unique ID of a Gauge";
                                    };
                                    readonly is_perpetual: {
                                        readonly type: "boolean";
                                        readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                    };
                                    readonly distribute_to: {
                                        readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                        readonly additionalProperties: true;
                                        readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                    };
                                    readonly start_time: {
                                        readonly type: "string";
                                        readonly description: "start_time is the distribution start time";
                                        readonly format: "date-time";
                                    };
                                    readonly num_epochs_paid_over: {
                                        readonly type: "string";
                                        readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                    };
                                    readonly filled_epochs: {
                                        readonly type: "string";
                                        readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                    };
                                    readonly distributed_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                        readonly description: "distributed_coins are coins that have been distributed already";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge";
                                readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                            };
                            readonly "osmosis.lockup.QueryCondition": {
                                readonly properties: {
                                    readonly lock_query_type: {
                                        readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Lock Query Type";
                                        readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "Denom represents the token denomination we are looking to lock up";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                        readonly format: "regex";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                        readonly format: "date-time";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Condition";
                                readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryExternalIncentiveGaugesResponse";
                            readonly definitions: {
                                readonly QueryExternalIncentiveGaugesResponse: {
                                    readonly properties: {
                                        readonly data: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.incentives.Gauge";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query External Incentive Gauges Response";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                                readonly "osmosis.incentives.Gauge": {
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly description: "id is the unique ID of a Gauge";
                                        };
                                        readonly is_perpetual: {
                                            readonly type: "boolean";
                                            readonly description: "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily.";
                                        };
                                        readonly distribute_to: {
                                            readonly $ref: "#/definitions/osmosis.lockup.QueryCondition";
                                            readonly additionalProperties: true;
                                            readonly description: "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp";
                                        };
                                        readonly coins: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                            readonly description: "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms";
                                        };
                                        readonly start_time: {
                                            readonly type: "string";
                                            readonly description: "start_time is the distribution start time";
                                            readonly format: "date-time";
                                        };
                                        readonly num_epochs_paid_over: {
                                            readonly type: "string";
                                            readonly description: "num_epochs_paid_over is the number of total epochs distribution will be completed over";
                                        };
                                        readonly filled_epochs: {
                                            readonly type: "string";
                                            readonly description: "filled_epochs is the number of epochs distribution has been completed on already";
                                        };
                                        readonly distributed_coins: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                            readonly description: "distributed_coins are coins that have been distributed already";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Gauge";
                                    readonly description: "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked.";
                                };
                                readonly "osmosis.lockup.QueryCondition": {
                                    readonly properties: {
                                        readonly lock_query_type: {
                                            readonly enum: readonly ["ByDuration", 0, "ByTime", 1];
                                            readonly oneOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "integer";
                                            }];
                                            readonly title: "Lock Query Type";
                                            readonly description: "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock.";
                                        };
                                        readonly denom: {
                                            readonly type: "string";
                                            readonly description: "Denom represents the token denomination we are looking to lock up";
                                        };
                                        readonly duration: {
                                            readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                            readonly type: "string";
                                            readonly description: "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.";
                                            readonly format: "regex";
                                        };
                                        readonly timestamp: {
                                            readonly type: "string";
                                            readonly description: "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Condition";
                                    readonly description: "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType.";
                                };
                            };
                        };
                    };
                    readonly QueryGaugeIdsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryGaugeIdsRequest";
                        readonly definitions: {
                            readonly QueryGaugeIdsRequest: {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Gauge Ids Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryGaugeIdsRequest";
                            readonly definitions: {
                                readonly QueryGaugeIdsRequest: {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Gauge Ids Request";
                                };
                            };
                        };
                    };
                    readonly QueryGaugeIdsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryGaugeIdsResponse";
                        readonly definitions: {
                            readonly QueryGaugeIdsResponse: {
                                readonly properties: {
                                    readonly gauge_ids_with_duration: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Gauge Ids Response";
                            };
                            readonly "osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration": {
                                readonly properties: {
                                    readonly gauge_id: {
                                        readonly type: "string";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly format: "regex";
                                    };
                                    readonly gauge_incentive_percentage: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Gauge Id With Duration";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryGaugeIdsResponse";
                            readonly definitions: {
                                readonly QueryGaugeIdsResponse: {
                                    readonly properties: {
                                        readonly gauge_ids_with_duration: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Gauge Ids Response";
                                };
                                readonly "osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration": {
                                    readonly properties: {
                                        readonly gauge_id: {
                                            readonly type: "string";
                                        };
                                        readonly duration: {
                                            readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                            readonly type: "string";
                                            readonly format: "regex";
                                        };
                                        readonly gauge_incentive_percentage: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Gauge Id With Duration";
                                };
                            };
                        };
                    };
                    readonly QueryIncentivizedPoolsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryIncentivizedPoolsRequest";
                        readonly definitions: {
                            readonly QueryIncentivizedPoolsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Incentivized Pools Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryIncentivizedPoolsRequest";
                            readonly definitions: {
                                readonly QueryIncentivizedPoolsRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Incentivized Pools Request";
                                };
                            };
                        };
                    };
                    readonly QueryIncentivizedPoolsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryIncentivizedPoolsResponse";
                        readonly definitions: {
                            readonly QueryIncentivizedPoolsResponse: {
                                readonly properties: {
                                    readonly incentivized_pools: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.IncentivizedPool";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Incentivized Pools Response";
                            };
                            readonly "osmosis.poolincentives.v1beta1.IncentivizedPool": {
                                readonly properties: {
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                    readonly lockable_duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly format: "regex";
                                    };
                                    readonly gauge_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Incentivized Pool";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryIncentivizedPoolsResponse";
                            readonly definitions: {
                                readonly QueryIncentivizedPoolsResponse: {
                                    readonly properties: {
                                        readonly incentivized_pools: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.IncentivizedPool";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Incentivized Pools Response";
                                };
                                readonly "osmosis.poolincentives.v1beta1.IncentivizedPool": {
                                    readonly properties: {
                                        readonly pool_id: {
                                            readonly type: "string";
                                        };
                                        readonly lockable_duration: {
                                            readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                            readonly type: "string";
                                            readonly format: "regex";
                                        };
                                        readonly gauge_id: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Incentivized Pool";
                                };
                            };
                        };
                    };
                    readonly QueryLockableDurationsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryLockableDurationsRequest";
                        readonly definitions: {
                            readonly QueryLockableDurationsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Lockable Durations Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryLockableDurationsRequest";
                            readonly definitions: {
                                readonly QueryLockableDurationsRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Lockable Durations Request";
                                };
                            };
                        };
                    };
                    readonly QueryLockableDurationsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryLockableDurationsResponse";
                        readonly definitions: {
                            readonly QueryLockableDurationsResponse: {
                                readonly properties: {
                                    readonly lockable_durations: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly type: "array";
                                        readonly format: "regex";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Lockable Durations Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryLockableDurationsResponse";
                            readonly definitions: {
                                readonly QueryLockableDurationsResponse: {
                                    readonly properties: {
                                        readonly lockable_durations: {
                                            readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                            readonly type: "array";
                                            readonly format: "regex";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Lockable Durations Response";
                                };
                            };
                        };
                    };
                    readonly QueryParamsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryParamsRequest";
                        readonly definitions: {
                            readonly QueryParamsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Params Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryParamsRequest";
                            readonly definitions: {
                                readonly QueryParamsRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Params Request";
                                };
                            };
                        };
                    };
                    readonly QueryParamsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryParamsResponse";
                        readonly definitions: {
                            readonly QueryParamsResponse: {
                                readonly properties: {
                                    readonly params: {
                                        readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.Params";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Params Response";
                            };
                            readonly "osmosis.poolincentives.v1beta1.Params": {
                                readonly properties: {
                                    readonly minted_denom: {
                                        readonly type: "string";
                                        readonly description: "minted_denom is the denomination of the coin expected to be minted by the minting module. Pool-incentives module doesn’t actually mint the coin itself, but rather manages the distribution of coins that matches the defined minted_denom.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Params";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryParamsResponse";
                            readonly definitions: {
                                readonly QueryParamsResponse: {
                                    readonly properties: {
                                        readonly params: {
                                            readonly $ref: "#/definitions/osmosis.poolincentives.v1beta1.Params";
                                            readonly additionalProperties: true;
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Params Response";
                                };
                                readonly "osmosis.poolincentives.v1beta1.Params": {
                                    readonly properties: {
                                        readonly minted_denom: {
                                            readonly type: "string";
                                            readonly description: "minted_denom is the denomination of the coin expected to be minted by the minting module. Pool-incentives module doesn’t actually mint the coin itself, but rather manages the distribution of coins that matches the defined minted_denom.";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Params";
                                };
                            };
                        };
                    };
                };
            };
            readonly superfluid: {
                readonly AllAssetsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AllAssetsRequest";
                    readonly definitions: {
                        readonly AllAssetsRequest: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "All Assets Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AllAssetsRequest";
                        readonly definitions: {
                            readonly AllAssetsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "All Assets Request";
                            };
                        };
                    };
                };
                readonly AllAssetsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AllAssetsResponse";
                    readonly definitions: {
                        readonly AllAssetsResponse: {
                            readonly properties: {
                                readonly assets: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidAsset";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "All Assets Response";
                        };
                        readonly "osmosis.superfluid.SuperfluidAsset": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly asset_type: {
                                    readonly enum: readonly ["SuperfluidAssetTypeNative", 0, "SuperfluidAssetTypeLPShare", 1];
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                    readonly title: "Superfluid Asset Type";
                                    readonly description: "SuperfluidAssetType indicates whether the superfluid asset is a native token itself or the lp share of a pool.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Asset";
                            readonly description: "SuperfluidAsset stores the pair of superfluid asset type and denom pair";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AllAssetsResponse";
                        readonly definitions: {
                            readonly AllAssetsResponse: {
                                readonly properties: {
                                    readonly assets: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidAsset";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "All Assets Response";
                            };
                            readonly "osmosis.superfluid.SuperfluidAsset": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly asset_type: {
                                        readonly enum: readonly ["SuperfluidAssetTypeNative", 0, "SuperfluidAssetTypeLPShare", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Superfluid Asset Type";
                                        readonly description: "SuperfluidAssetType indicates whether the superfluid asset is a native token itself or the lp share of a pool.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Asset";
                                readonly description: "SuperfluidAsset stores the pair of superfluid asset type and denom pair";
                            };
                        };
                    };
                };
                readonly AllIntermediaryAccountsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AllIntermediaryAccountsRequest";
                    readonly definitions: {
                        readonly AllIntermediaryAccountsRequest: {
                            readonly properties: {
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "All Intermediary Accounts Request";
                        };
                        readonly "cosmos.base.query.v1beta1.PageRequest": {
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                    readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly offset: {
                                    readonly type: "string";
                                    readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                };
                                readonly limit: {
                                    readonly type: "string";
                                    readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                };
                                readonly count_total: {
                                    readonly type: "boolean";
                                    readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                };
                                readonly reverse: {
                                    readonly type: "boolean";
                                    readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Request";
                            readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AllIntermediaryAccountsRequest";
                        readonly definitions: {
                            readonly AllIntermediaryAccountsRequest: {
                                readonly properties: {
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageRequest";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "All Intermediary Accounts Request";
                            };
                            readonly "cosmos.base.query.v1beta1.PageRequest": {
                                readonly properties: {
                                    readonly key: {
                                        readonly type: "string";
                                        readonly description: "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly offset: {
                                        readonly type: "string";
                                        readonly description: "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.";
                                    };
                                    readonly limit: {
                                        readonly type: "string";
                                        readonly description: "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.";
                                    };
                                    readonly count_total: {
                                        readonly type: "boolean";
                                        readonly description: "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set.";
                                    };
                                    readonly reverse: {
                                        readonly type: "boolean";
                                        readonly description: "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Request";
                                readonly description: "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }";
                            };
                        };
                    };
                };
                readonly AllIntermediaryAccountsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AllIntermediaryAccountsResponse";
                    readonly definitions: {
                        readonly AllIntermediaryAccountsResponse: {
                            readonly properties: {
                                readonly accounts: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
                                    };
                                    readonly type: "array";
                                };
                                readonly pagination: {
                                    readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "All Intermediary Accounts Response";
                        };
                        readonly "cosmos.base.query.v1beta1.PageResponse": {
                            readonly properties: {
                                readonly next_key: {
                                    readonly type: "string";
                                    readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                    readonly format: "binary";
                                    readonly binaryEncoding: "base64";
                                };
                                readonly total: {
                                    readonly type: "string";
                                    readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Page Response";
                            readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                        };
                        readonly "osmosis.superfluid.SuperfluidIntermediaryAccountInfo": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly val_addr: {
                                    readonly type: "string";
                                };
                                readonly gauge_id: {
                                    readonly type: "string";
                                };
                                readonly address: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Intermediary Account Info";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AllIntermediaryAccountsResponse";
                        readonly definitions: {
                            readonly AllIntermediaryAccountsResponse: {
                                readonly properties: {
                                    readonly accounts: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly pagination: {
                                        readonly $ref: "#/definitions/cosmos.base.query.v1beta1.PageResponse";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "All Intermediary Accounts Response";
                            };
                            readonly "cosmos.base.query.v1beta1.PageResponse": {
                                readonly properties: {
                                    readonly next_key: {
                                        readonly type: "string";
                                        readonly description: "next_key is the key to be passed to PageRequest.key to query the next page most efficiently";
                                        readonly format: "binary";
                                        readonly binaryEncoding: "base64";
                                    };
                                    readonly total: {
                                        readonly type: "string";
                                        readonly description: "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Page Response";
                                readonly description: "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }";
                            };
                            readonly "osmosis.superfluid.SuperfluidIntermediaryAccountInfo": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly val_addr: {
                                        readonly type: "string";
                                    };
                                    readonly gauge_id: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Intermediary Account Info";
                            };
                        };
                    };
                };
                readonly AssetMultiplierRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AssetMultiplierRequest";
                    readonly definitions: {
                        readonly AssetMultiplierRequest: {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Asset Multiplier Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AssetMultiplierRequest";
                        readonly definitions: {
                            readonly AssetMultiplierRequest: {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Asset Multiplier Request";
                            };
                        };
                    };
                };
                readonly AssetMultiplierResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AssetMultiplierResponse";
                    readonly definitions: {
                        readonly AssetMultiplierResponse: {
                            readonly properties: {
                                readonly osmo_equivalent_multiplier: {
                                    readonly $ref: "#/definitions/osmosis.superfluid.OsmoEquivalentMultiplierRecord";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Asset Multiplier Response";
                        };
                        readonly "osmosis.superfluid.OsmoEquivalentMultiplierRecord": {
                            readonly properties: {
                                readonly epoch_number: {
                                    readonly type: "string";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                    readonly description: "superfluid asset denom, can be LP token or native token";
                                };
                                readonly multiplier: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Osmo Equivalent Multiplier Record";
                            readonly description: "The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we treat an LP share as having, for all of epoch N. Eventually this is intended to be set as the Time-weighted-average-osmo-backing for the entire duration of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior epochs rewards) However for now, this is not the TWAP but instead the spot price at the boundary. For different types of assets in the future, it could change.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AssetMultiplierResponse";
                        readonly definitions: {
                            readonly AssetMultiplierResponse: {
                                readonly properties: {
                                    readonly osmo_equivalent_multiplier: {
                                        readonly $ref: "#/definitions/osmosis.superfluid.OsmoEquivalentMultiplierRecord";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Asset Multiplier Response";
                            };
                            readonly "osmosis.superfluid.OsmoEquivalentMultiplierRecord": {
                                readonly properties: {
                                    readonly epoch_number: {
                                        readonly type: "string";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                        readonly description: "superfluid asset denom, can be LP token or native token";
                                    };
                                    readonly multiplier: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Osmo Equivalent Multiplier Record";
                                readonly description: "The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we treat an LP share as having, for all of epoch N. Eventually this is intended to be set as the Time-weighted-average-osmo-backing for the entire duration of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior epochs rewards) However for now, this is not the TWAP but instead the spot price at the boundary. For different types of assets in the future, it could change.";
                            };
                        };
                    };
                };
                readonly AssetTypeRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AssetTypeRequest";
                    readonly definitions: {
                        readonly AssetTypeRequest: {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Asset Type Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AssetTypeRequest";
                        readonly definitions: {
                            readonly AssetTypeRequest: {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Asset Type Request";
                            };
                        };
                    };
                };
                readonly AssetTypeResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/AssetTypeResponse";
                    readonly definitions: {
                        readonly AssetTypeResponse: {
                            readonly properties: {
                                readonly asset_type: {
                                    readonly enum: readonly ["SuperfluidAssetTypeNative", 0, "SuperfluidAssetTypeLPShare", 1];
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                    readonly title: "Superfluid Asset Type";
                                    readonly description: "SuperfluidAssetType indicates whether the superfluid asset is a native token itself or the lp share of a pool.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Asset Type Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/AssetTypeResponse";
                        readonly definitions: {
                            readonly AssetTypeResponse: {
                                readonly properties: {
                                    readonly asset_type: {
                                        readonly enum: readonly ["SuperfluidAssetTypeNative", 0, "SuperfluidAssetTypeLPShare", 1];
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "integer";
                                        }];
                                        readonly title: "Superfluid Asset Type";
                                        readonly description: "SuperfluidAssetType indicates whether the superfluid asset is a native token itself or the lp share of a pool.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Asset Type Response";
                            };
                        };
                    };
                };
                readonly ConnectedIntermediaryAccountRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ConnectedIntermediaryAccountRequest";
                    readonly definitions: {
                        readonly ConnectedIntermediaryAccountRequest: {
                            readonly properties: {
                                readonly lock_id: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Connected Intermediary Account Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ConnectedIntermediaryAccountRequest";
                        readonly definitions: {
                            readonly ConnectedIntermediaryAccountRequest: {
                                readonly properties: {
                                    readonly lock_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Connected Intermediary Account Request";
                            };
                        };
                    };
                };
                readonly ConnectedIntermediaryAccountResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/ConnectedIntermediaryAccountResponse";
                    readonly definitions: {
                        readonly ConnectedIntermediaryAccountResponse: {
                            readonly properties: {
                                readonly account: {
                                    readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Connected Intermediary Account Response";
                        };
                        readonly "osmosis.superfluid.SuperfluidIntermediaryAccountInfo": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly val_addr: {
                                    readonly type: "string";
                                };
                                readonly gauge_id: {
                                    readonly type: "string";
                                };
                                readonly address: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Intermediary Account Info";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/ConnectedIntermediaryAccountResponse";
                        readonly definitions: {
                            readonly ConnectedIntermediaryAccountResponse: {
                                readonly properties: {
                                    readonly account: {
                                        readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Connected Intermediary Account Response";
                            };
                            readonly "osmosis.superfluid.SuperfluidIntermediaryAccountInfo": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly val_addr: {
                                        readonly type: "string";
                                    };
                                    readonly gauge_id: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Intermediary Account Info";
                            };
                        };
                    };
                };
                readonly EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/EstimateSuperfluidDelegatedAmountByValidatorDenomRequest";
                    readonly definitions: {
                        readonly EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
                            readonly properties: {
                                readonly validator_address: {
                                    readonly type: "string";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Estimate Superfluid Delegated Amount By Validator Denom Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/EstimateSuperfluidDelegatedAmountByValidatorDenomRequest";
                        readonly definitions: {
                            readonly EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
                                readonly properties: {
                                    readonly validator_address: {
                                        readonly type: "string";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Estimate Superfluid Delegated Amount By Validator Denom Request";
                            };
                        };
                    };
                };
                readonly EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/EstimateSuperfluidDelegatedAmountByValidatorDenomResponse";
                    readonly definitions: {
                        readonly EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
                            readonly properties: {
                                readonly total_delegated_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Estimate Superfluid Delegated Amount By Validator Denom Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/EstimateSuperfluidDelegatedAmountByValidatorDenomResponse";
                        readonly definitions: {
                            readonly EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
                                readonly properties: {
                                    readonly total_delegated_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Estimate Superfluid Delegated Amount By Validator Denom Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly MsgLockAndSuperfluidDelegate: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgLockAndSuperfluidDelegate";
                    readonly definitions: {
                        readonly MsgLockAndSuperfluidDelegate: {
                            readonly properties: {
                                readonly sender: {
                                    readonly type: "string";
                                };
                                readonly coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                                readonly val_addr: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "message MsgSuperfluidRedelegate {\n   string sender = 1 [ (gogoproto.moretags) = \"yaml:\\\"sender\\\"\" ];\n   uint64 lock_id = 2;\n   string new_val_addr = 3;\n }\n message MsgSuperfluidRedelegateResponse {}";
                            readonly description: "message MsgSuperfluidRedelegate {   string sender = 1 [ (gogoproto.moretags) = \"yaml:\\\"sender\\\"\" ];   uint64 lock_id = 2;   string new_val_addr = 3; } message MsgSuperfluidRedelegateResponse {}  MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration, and then does a superfluid lock from the newly created lockup, to the specified validator addr.";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgLockAndSuperfluidDelegate";
                        readonly definitions: {
                            readonly MsgLockAndSuperfluidDelegate: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly val_addr: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "message MsgSuperfluidRedelegate {\n   string sender = 1 [ (gogoproto.moretags) = \"yaml:\\\"sender\\\"\" ];\n   uint64 lock_id = 2;\n   string new_val_addr = 3;\n }\n message MsgSuperfluidRedelegateResponse {}";
                                readonly description: "message MsgSuperfluidRedelegate {   string sender = 1 [ (gogoproto.moretags) = \"yaml:\\\"sender\\\"\" ];   uint64 lock_id = 2;   string new_val_addr = 3; } message MsgSuperfluidRedelegateResponse {}  MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration, and then does a superfluid lock from the newly created lockup, to the specified validator addr.";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly MsgLockAndSuperfluidDelegateResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgLockAndSuperfluidDelegateResponse";
                    readonly definitions: {
                        readonly MsgLockAndSuperfluidDelegateResponse: {
                            readonly properties: {
                                readonly ID: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Lock And Superfluid Delegate Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgLockAndSuperfluidDelegateResponse";
                        readonly definitions: {
                            readonly MsgLockAndSuperfluidDelegateResponse: {
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Lock And Superfluid Delegate Response";
                            };
                        };
                    };
                };
                readonly MsgSuperfluidDelegate: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgSuperfluidDelegate";
                    readonly definitions: {
                        readonly MsgSuperfluidDelegate: {
                            readonly properties: {
                                readonly sender: {
                                    readonly type: "string";
                                };
                                readonly lock_id: {
                                    readonly type: "string";
                                };
                                readonly val_addr: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Superfluid Delegate";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSuperfluidDelegate";
                        readonly definitions: {
                            readonly MsgSuperfluidDelegate: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly lock_id: {
                                        readonly type: "string";
                                    };
                                    readonly val_addr: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Superfluid Delegate";
                            };
                        };
                    };
                };
                readonly MsgSuperfluidDelegateResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgSuperfluidDelegateResponse";
                    readonly definitions: {
                        readonly MsgSuperfluidDelegateResponse: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Superfluid Delegate Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSuperfluidDelegateResponse";
                        readonly definitions: {
                            readonly MsgSuperfluidDelegateResponse: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Superfluid Delegate Response";
                            };
                        };
                    };
                };
                readonly MsgSuperfluidUnbondLock: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgSuperfluidUnbondLock";
                    readonly definitions: {
                        readonly MsgSuperfluidUnbondLock: {
                            readonly properties: {
                                readonly sender: {
                                    readonly type: "string";
                                };
                                readonly lock_id: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Superfluid Unbond Lock";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSuperfluidUnbondLock";
                        readonly definitions: {
                            readonly MsgSuperfluidUnbondLock: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly lock_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Superfluid Unbond Lock";
                            };
                        };
                    };
                };
                readonly MsgSuperfluidUnbondLockResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgSuperfluidUnbondLockResponse";
                    readonly definitions: {
                        readonly MsgSuperfluidUnbondLockResponse: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Superfluid Unbond Lock Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSuperfluidUnbondLockResponse";
                        readonly definitions: {
                            readonly MsgSuperfluidUnbondLockResponse: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Superfluid Unbond Lock Response";
                            };
                        };
                    };
                };
                readonly MsgSuperfluidUndelegate: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgSuperfluidUndelegate";
                    readonly definitions: {
                        readonly MsgSuperfluidUndelegate: {
                            readonly properties: {
                                readonly sender: {
                                    readonly type: "string";
                                };
                                readonly lock_id: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Superfluid Undelegate";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSuperfluidUndelegate";
                        readonly definitions: {
                            readonly MsgSuperfluidUndelegate: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly lock_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Superfluid Undelegate";
                            };
                        };
                    };
                };
                readonly MsgSuperfluidUndelegateResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgSuperfluidUndelegateResponse";
                    readonly definitions: {
                        readonly MsgSuperfluidUndelegateResponse: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Superfluid Undelegate Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgSuperfluidUndelegateResponse";
                        readonly definitions: {
                            readonly MsgSuperfluidUndelegateResponse: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Superfluid Undelegate Response";
                            };
                        };
                    };
                };
                readonly MsgUnPoolWhitelistedPool: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgUnPoolWhitelistedPool";
                    readonly definitions: {
                        readonly MsgUnPoolWhitelistedPool: {
                            readonly properties: {
                                readonly sender: {
                                    readonly type: "string";
                                };
                                readonly pool_id: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Un Pool Whitelisted Pool";
                            readonly description: "MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is associated with pool pool_id. If pool_id is not approved for unpooling by governance, this is a no-op. Unpooling takes the locked gamm shares, and runs \"ExitPool\" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new lock for every constituent token, with the duration associated with the lock. If the lock was unbonding, the new lockup durations should be the time left until unbond completion.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgUnPoolWhitelistedPool";
                        readonly definitions: {
                            readonly MsgUnPoolWhitelistedPool: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly pool_id: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Un Pool Whitelisted Pool";
                                readonly description: "MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is associated with pool pool_id. If pool_id is not approved for unpooling by governance, this is a no-op. Unpooling takes the locked gamm shares, and runs \"ExitPool\" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new lock for every constituent token, with the duration associated with the lock. If the lock was unbonding, the new lockup durations should be the time left until unbond completion.";
                            };
                        };
                    };
                };
                readonly MsgUnPoolWhitelistedPoolResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/MsgUnPoolWhitelistedPoolResponse";
                    readonly definitions: {
                        readonly MsgUnPoolWhitelistedPoolResponse: {
                            readonly properties: {
                                readonly exited_lock_ids: {
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Msg Un Pool Whitelisted Pool Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgUnPoolWhitelistedPoolResponse";
                        readonly definitions: {
                            readonly MsgUnPoolWhitelistedPoolResponse: {
                                readonly properties: {
                                    readonly exited_lock_ids: {
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Un Pool Whitelisted Pool Response";
                            };
                        };
                    };
                };
                readonly QueryParamsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryParamsRequest";
                    readonly definitions: {
                        readonly QueryParamsRequest: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Params Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryParamsRequest";
                        readonly definitions: {
                            readonly QueryParamsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Params Request";
                            };
                        };
                    };
                };
                readonly QueryParamsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryParamsResponse";
                    readonly definitions: {
                        readonly QueryParamsResponse: {
                            readonly properties: {
                                readonly params: {
                                    readonly $ref: "#/definitions/osmosis.superfluid.Params";
                                    readonly additionalProperties: true;
                                    readonly description: "params defines the parameters of the module.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Params Response";
                        };
                        readonly "osmosis.superfluid.Params": {
                            readonly properties: {
                                readonly minimum_risk_factor: {
                                    readonly type: "string";
                                    readonly description: "minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for superfluid staking, default: 5%. The minimum risk factor works to counter-balance the staked amount on chain's exposure to various asset volatilities, and have base staking be 'resistant' to volatility.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Params";
                            readonly description: "Params holds parameters for the superfluid module";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryParamsResponse";
                        readonly definitions: {
                            readonly QueryParamsResponse: {
                                readonly properties: {
                                    readonly params: {
                                        readonly $ref: "#/definitions/osmosis.superfluid.Params";
                                        readonly additionalProperties: true;
                                        readonly description: "params defines the parameters of the module.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Params Response";
                            };
                            readonly "osmosis.superfluid.Params": {
                                readonly properties: {
                                    readonly minimum_risk_factor: {
                                        readonly type: "string";
                                        readonly description: "minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for superfluid staking, default: 5%. The minimum risk factor works to counter-balance the staked amount on chain's exposure to various asset volatilities, and have base staking be 'resistant' to volatility.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Params";
                                readonly description: "Params holds parameters for the superfluid module";
                            };
                        };
                    };
                };
                readonly QueryTotalDelegationByDelegatorRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryTotalDelegationByDelegatorRequest";
                    readonly definitions: {
                        readonly QueryTotalDelegationByDelegatorRequest: {
                            readonly properties: {
                                readonly delegator_address: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Total Delegation By Delegator Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryTotalDelegationByDelegatorRequest";
                        readonly definitions: {
                            readonly QueryTotalDelegationByDelegatorRequest: {
                                readonly properties: {
                                    readonly delegator_address: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Total Delegation By Delegator Request";
                            };
                        };
                    };
                };
                readonly QueryTotalDelegationByDelegatorResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/QueryTotalDelegationByDelegatorResponse";
                    readonly definitions: {
                        readonly QueryTotalDelegationByDelegatorResponse: {
                            readonly properties: {
                                readonly superfluid_delegation_records: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord";
                                    };
                                    readonly type: "array";
                                };
                                readonly delegation_response: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.staking.v1beta1.DelegationResponse";
                                    };
                                    readonly type: "array";
                                };
                                readonly total_delegated_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                                readonly total_equivalent_staked_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Query Total Delegation By Delegator Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "cosmos.staking.v1beta1.Delegation": {
                            readonly properties: {
                                readonly delegator_address: {
                                    readonly type: "string";
                                    readonly description: "delegator_address is the bech32-encoded address of the delegator.";
                                };
                                readonly validator_address: {
                                    readonly type: "string";
                                    readonly description: "validator_address is the bech32-encoded address of the validator.";
                                };
                                readonly shares: {
                                    readonly type: "string";
                                    readonly description: "shares define the delegation shares received.";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Delegation";
                            readonly description: "Delegation represents the bond with tokens held by an account. It is owned by one delegator, and is associated with the voting power of one validator.";
                        };
                        readonly "cosmos.staking.v1beta1.DelegationResponse": {
                            readonly properties: {
                                readonly delegation: {
                                    readonly $ref: "#/definitions/cosmos.staking.v1beta1.Delegation";
                                    readonly additionalProperties: true;
                                };
                                readonly balance: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Delegation Response";
                            readonly description: "DelegationResponse is equivalent to Delegation except that it contains a balance in addition to shares which is more suitable for client responses.";
                        };
                        readonly "osmosis.superfluid.SuperfluidDelegationRecord": {
                            readonly properties: {
                                readonly delegator_address: {
                                    readonly type: "string";
                                };
                                readonly validator_address: {
                                    readonly type: "string";
                                };
                                readonly delegation_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                                readonly equivalent_staked_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegation Record";
                            readonly description: "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryTotalDelegationByDelegatorResponse";
                        readonly definitions: {
                            readonly QueryTotalDelegationByDelegatorResponse: {
                                readonly properties: {
                                    readonly superfluid_delegation_records: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly delegation_response: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.staking.v1beta1.DelegationResponse";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly total_delegated_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly total_equivalent_staked_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Total Delegation By Delegator Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "cosmos.staking.v1beta1.Delegation": {
                                readonly properties: {
                                    readonly delegator_address: {
                                        readonly type: "string";
                                        readonly description: "delegator_address is the bech32-encoded address of the delegator.";
                                    };
                                    readonly validator_address: {
                                        readonly type: "string";
                                        readonly description: "validator_address is the bech32-encoded address of the validator.";
                                    };
                                    readonly shares: {
                                        readonly type: "string";
                                        readonly description: "shares define the delegation shares received.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Delegation";
                                readonly description: "Delegation represents the bond with tokens held by an account. It is owned by one delegator, and is associated with the voting power of one validator.";
                            };
                            readonly "cosmos.staking.v1beta1.DelegationResponse": {
                                readonly properties: {
                                    readonly delegation: {
                                        readonly $ref: "#/definitions/cosmos.staking.v1beta1.Delegation";
                                        readonly additionalProperties: true;
                                    };
                                    readonly balance: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Delegation Response";
                                readonly description: "DelegationResponse is equivalent to Delegation except that it contains a balance in addition to shares which is more suitable for client responses.";
                            };
                            readonly "osmosis.superfluid.SuperfluidDelegationRecord": {
                                readonly properties: {
                                    readonly delegator_address: {
                                        readonly type: "string";
                                    };
                                    readonly validator_address: {
                                        readonly type: "string";
                                    };
                                    readonly delegation_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                    readonly equivalent_staked_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegation Record";
                                readonly description: "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form.";
                            };
                        };
                    };
                };
                readonly SuperfluidDelegationAmountRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SuperfluidDelegationAmountRequest";
                    readonly definitions: {
                        readonly SuperfluidDelegationAmountRequest: {
                            readonly properties: {
                                readonly delegator_address: {
                                    readonly type: "string";
                                };
                                readonly validator_address: {
                                    readonly type: "string";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegation Amount Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SuperfluidDelegationAmountRequest";
                        readonly definitions: {
                            readonly SuperfluidDelegationAmountRequest: {
                                readonly properties: {
                                    readonly delegator_address: {
                                        readonly type: "string";
                                    };
                                    readonly validator_address: {
                                        readonly type: "string";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegation Amount Request";
                            };
                        };
                    };
                };
                readonly SuperfluidDelegationAmountResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SuperfluidDelegationAmountResponse";
                    readonly definitions: {
                        readonly SuperfluidDelegationAmountResponse: {
                            readonly properties: {
                                readonly amount: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegation Amount Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SuperfluidDelegationAmountResponse";
                        readonly definitions: {
                            readonly SuperfluidDelegationAmountResponse: {
                                readonly properties: {
                                    readonly amount: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegation Amount Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                    };
                };
                readonly SuperfluidDelegationsByDelegatorRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SuperfluidDelegationsByDelegatorRequest";
                    readonly definitions: {
                        readonly SuperfluidDelegationsByDelegatorRequest: {
                            readonly properties: {
                                readonly delegator_address: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegations By Delegator Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SuperfluidDelegationsByDelegatorRequest";
                        readonly definitions: {
                            readonly SuperfluidDelegationsByDelegatorRequest: {
                                readonly properties: {
                                    readonly delegator_address: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegations By Delegator Request";
                            };
                        };
                    };
                };
                readonly SuperfluidDelegationsByDelegatorResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SuperfluidDelegationsByDelegatorResponse";
                    readonly definitions: {
                        readonly SuperfluidDelegationsByDelegatorResponse: {
                            readonly properties: {
                                readonly superfluid_delegation_records: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord";
                                    };
                                    readonly type: "array";
                                };
                                readonly total_delegated_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                                readonly total_equivalent_staked_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegations By Delegator Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.superfluid.SuperfluidDelegationRecord": {
                            readonly properties: {
                                readonly delegator_address: {
                                    readonly type: "string";
                                };
                                readonly validator_address: {
                                    readonly type: "string";
                                };
                                readonly delegation_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                                readonly equivalent_staked_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegation Record";
                            readonly description: "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SuperfluidDelegationsByDelegatorResponse";
                        readonly definitions: {
                            readonly SuperfluidDelegationsByDelegatorResponse: {
                                readonly properties: {
                                    readonly superfluid_delegation_records: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly total_delegated_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly total_equivalent_staked_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegations By Delegator Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.superfluid.SuperfluidDelegationRecord": {
                                readonly properties: {
                                    readonly delegator_address: {
                                        readonly type: "string";
                                    };
                                    readonly validator_address: {
                                        readonly type: "string";
                                    };
                                    readonly delegation_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                    readonly equivalent_staked_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegation Record";
                                readonly description: "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form.";
                            };
                        };
                    };
                };
                readonly SuperfluidDelegationsByValidatorDenomRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SuperfluidDelegationsByValidatorDenomRequest";
                    readonly definitions: {
                        readonly SuperfluidDelegationsByValidatorDenomRequest: {
                            readonly properties: {
                                readonly validator_address: {
                                    readonly type: "string";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegations By Validator Denom Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SuperfluidDelegationsByValidatorDenomRequest";
                        readonly definitions: {
                            readonly SuperfluidDelegationsByValidatorDenomRequest: {
                                readonly properties: {
                                    readonly validator_address: {
                                        readonly type: "string";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegations By Validator Denom Request";
                            };
                        };
                    };
                };
                readonly SuperfluidDelegationsByValidatorDenomResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SuperfluidDelegationsByValidatorDenomResponse";
                    readonly definitions: {
                        readonly SuperfluidDelegationsByValidatorDenomResponse: {
                            readonly properties: {
                                readonly superfluid_delegation_records: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegations By Validator Denom Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.superfluid.SuperfluidDelegationRecord": {
                            readonly properties: {
                                readonly delegator_address: {
                                    readonly type: "string";
                                };
                                readonly validator_address: {
                                    readonly type: "string";
                                };
                                readonly delegation_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                                readonly equivalent_staked_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegation Record";
                            readonly description: "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SuperfluidDelegationsByValidatorDenomResponse";
                        readonly definitions: {
                            readonly SuperfluidDelegationsByValidatorDenomResponse: {
                                readonly properties: {
                                    readonly superfluid_delegation_records: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegations By Validator Denom Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.superfluid.SuperfluidDelegationRecord": {
                                readonly properties: {
                                    readonly delegator_address: {
                                        readonly type: "string";
                                    };
                                    readonly validator_address: {
                                        readonly type: "string";
                                    };
                                    readonly delegation_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                    readonly equivalent_staked_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegation Record";
                                readonly description: "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form.";
                            };
                        };
                    };
                };
                readonly SuperfluidIntermediaryAccountInfo: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SuperfluidIntermediaryAccountInfo";
                    readonly definitions: {
                        readonly SuperfluidIntermediaryAccountInfo: {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly val_addr: {
                                    readonly type: "string";
                                };
                                readonly gauge_id: {
                                    readonly type: "string";
                                };
                                readonly address: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Intermediary Account Info";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SuperfluidIntermediaryAccountInfo";
                        readonly definitions: {
                            readonly SuperfluidIntermediaryAccountInfo: {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly val_addr: {
                                        readonly type: "string";
                                    };
                                    readonly gauge_id: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Intermediary Account Info";
                            };
                        };
                    };
                };
                readonly SuperfluidUndelegationsByDelegatorRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SuperfluidUndelegationsByDelegatorRequest";
                    readonly definitions: {
                        readonly SuperfluidUndelegationsByDelegatorRequest: {
                            readonly properties: {
                                readonly delegator_address: {
                                    readonly type: "string";
                                };
                                readonly denom: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Undelegations By Delegator Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SuperfluidUndelegationsByDelegatorRequest";
                        readonly definitions: {
                            readonly SuperfluidUndelegationsByDelegatorRequest: {
                                readonly properties: {
                                    readonly delegator_address: {
                                        readonly type: "string";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Undelegations By Delegator Request";
                            };
                        };
                    };
                };
                readonly SuperfluidUndelegationsByDelegatorResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/SuperfluidUndelegationsByDelegatorResponse";
                    readonly definitions: {
                        readonly SuperfluidUndelegationsByDelegatorResponse: {
                            readonly properties: {
                                readonly superfluid_delegation_records: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord";
                                    };
                                    readonly type: "array";
                                };
                                readonly total_undelegated_coins: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    };
                                    readonly type: "array";
                                };
                                readonly synthetic_locks: {
                                    readonly items: {
                                        readonly $ref: "#/definitions/osmosis.lockup.SyntheticLock";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Undelegations By Delegator Response";
                        };
                        readonly "cosmos.base.v1beta1.Coin": {
                            readonly properties: {
                                readonly denom: {
                                    readonly type: "string";
                                };
                                readonly amount: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Coin";
                            readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                        };
                        readonly "osmosis.lockup.SyntheticLock": {
                            readonly properties: {
                                readonly underlying_lock_id: {
                                    readonly type: "string";
                                    readonly description: "Underlying Lock ID is the underlying native lock's id for this synthetic lockup. A synthetic lock MUST have an underlying lock.";
                                };
                                readonly synth_denom: {
                                    readonly type: "string";
                                    readonly description: "SynthDenom is the synthetic denom that is a combination of gamm share + bonding status + validator address.";
                                };
                                readonly end_time: {
                                    readonly type: "string";
                                    readonly description: "used for unbonding synthetic lockups, for active synthetic lockups, this value is set to uninitialized value";
                                    readonly format: "date-time";
                                };
                                readonly duration: {
                                    readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                    readonly type: "string";
                                    readonly description: "Duration is the duration for a synthetic lock to mature at the point of unbonding has started.";
                                    readonly format: "regex";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Synthetic Lock";
                            readonly description: "SyntheticLock is creating virtual lockup where new denom is combination of original denom and synthetic suffix. At the time of synthetic lockup creation and deletion, accumulation store is also being updated and on querier side, they can query as freely as native lockup.";
                        };
                        readonly "osmosis.superfluid.SuperfluidDelegationRecord": {
                            readonly properties: {
                                readonly delegator_address: {
                                    readonly type: "string";
                                };
                                readonly validator_address: {
                                    readonly type: "string";
                                };
                                readonly delegation_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                                readonly equivalent_staked_amount: {
                                    readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Superfluid Delegation Record";
                            readonly description: "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form.";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/SuperfluidUndelegationsByDelegatorResponse";
                        readonly definitions: {
                            readonly SuperfluidUndelegationsByDelegatorResponse: {
                                readonly properties: {
                                    readonly superfluid_delegation_records: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly total_undelegated_coins: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly synthetic_locks: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.lockup.SyntheticLock";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Undelegations By Delegator Response";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.lockup.SyntheticLock": {
                                readonly properties: {
                                    readonly underlying_lock_id: {
                                        readonly type: "string";
                                        readonly description: "Underlying Lock ID is the underlying native lock's id for this synthetic lockup. A synthetic lock MUST have an underlying lock.";
                                    };
                                    readonly synth_denom: {
                                        readonly type: "string";
                                        readonly description: "SynthDenom is the synthetic denom that is a combination of gamm share + bonding status + validator address.";
                                    };
                                    readonly end_time: {
                                        readonly type: "string";
                                        readonly description: "used for unbonding synthetic lockups, for active synthetic lockups, this value is set to uninitialized value";
                                        readonly format: "date-time";
                                    };
                                    readonly duration: {
                                        readonly pattern: "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$";
                                        readonly type: "string";
                                        readonly description: "Duration is the duration for a synthetic lock to mature at the point of unbonding has started.";
                                        readonly format: "regex";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Synthetic Lock";
                                readonly description: "SyntheticLock is creating virtual lockup where new denom is combination of original denom and synthetic suffix. At the time of synthetic lockup creation and deletion, accumulation store is also being updated and on querier side, they can query as freely as native lockup.";
                            };
                            readonly "osmosis.superfluid.SuperfluidDelegationRecord": {
                                readonly properties: {
                                    readonly delegator_address: {
                                        readonly type: "string";
                                    };
                                    readonly validator_address: {
                                        readonly type: "string";
                                    };
                                    readonly delegation_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                    readonly equivalent_staked_amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Superfluid Delegation Record";
                                readonly description: "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form.";
                            };
                        };
                    };
                };
                readonly TotalSuperfluidDelegationsRequest: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/TotalSuperfluidDelegationsRequest";
                    readonly definitions: {
                        readonly TotalSuperfluidDelegationsRequest: {
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Total Superfluid Delegations Request";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/TotalSuperfluidDelegationsRequest";
                        readonly definitions: {
                            readonly TotalSuperfluidDelegationsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Total Superfluid Delegations Request";
                            };
                        };
                    };
                };
                readonly TotalSuperfluidDelegationsResponse: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly $ref: "#/definitions/TotalSuperfluidDelegationsResponse";
                    readonly definitions: {
                        readonly TotalSuperfluidDelegationsResponse: {
                            readonly properties: {
                                readonly total_delegations: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: true;
                            readonly type: "object";
                            readonly title: "Total Superfluid Delegations Response";
                        };
                    };
                    readonly default: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/TotalSuperfluidDelegationsResponse";
                        readonly definitions: {
                            readonly TotalSuperfluidDelegationsResponse: {
                                readonly properties: {
                                    readonly total_delegations: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Total Superfluid Delegations Response";
                            };
                        };
                    };
                };
            };
            readonly tokenfactory: {
                readonly v1beta1: {
                    readonly MsgBurn: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgBurn";
                        readonly definitions: {
                            readonly MsgBurn: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Burn";
                                readonly description: "MsgBurn is the sdk.Msg type for allowing an admin account to burn a token.  For now, we only support burning from the sender account.";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgBurn";
                            readonly definitions: {
                                readonly MsgBurn: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            readonly additionalProperties: true;
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Burn";
                                    readonly description: "MsgBurn is the sdk.Msg type for allowing an admin account to burn a token.  For now, we only support burning from the sender account.";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly MsgBurnResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgBurnResponse";
                        readonly definitions: {
                            readonly MsgBurnResponse: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Burn Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgBurnResponse";
                            readonly definitions: {
                                readonly MsgBurnResponse: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Burn Response";
                                };
                            };
                        };
                    };
                    readonly MsgChangeAdmin: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgChangeAdmin";
                        readonly definitions: {
                            readonly MsgChangeAdmin: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly new_admin: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Change Admin";
                                readonly description: "MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign adminship of a denom to a new account";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgChangeAdmin";
                            readonly definitions: {
                                readonly MsgChangeAdmin: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly new_admin: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Change Admin";
                                    readonly description: "MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign adminship of a denom to a new account";
                                };
                            };
                        };
                    };
                    readonly MsgChangeAdminResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgChangeAdminResponse";
                        readonly definitions: {
                            readonly MsgChangeAdminResponse: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Change Admin Response";
                                readonly description: "MsgChangeAdminResponse defines the response structure for an executed MsgChangeAdmin message.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgChangeAdminResponse";
                            readonly definitions: {
                                readonly MsgChangeAdminResponse: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Change Admin Response";
                                    readonly description: "MsgChangeAdminResponse defines the response structure for an executed MsgChangeAdmin message.";
                                };
                            };
                        };
                    };
                    readonly MsgCreateDenom: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgCreateDenom";
                        readonly definitions: {
                            readonly MsgCreateDenom: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly subdenom: {
                                        readonly type: "string";
                                        readonly description: "subdenom can be up to 44 \"alphanumeric\" characters long.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Create Denom";
                                readonly description: "MsgCreateDenom defines the message structure for the CreateDenom gRPC service method. It allows an account to create a new denom. It requires a sender address and a sub denomination. The (sender_address, sub_denomination) tuple must be unique and cannot be re-used. The resulting denom created is defined as <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is originally set to be the creator, but this can be changed later. The token denom does not indicate the current admin.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgCreateDenom";
                            readonly definitions: {
                                readonly MsgCreateDenom: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly subdenom: {
                                            readonly type: "string";
                                            readonly description: "subdenom can be up to 44 \"alphanumeric\" characters long.";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Create Denom";
                                    readonly description: "MsgCreateDenom defines the message structure for the CreateDenom gRPC service method. It allows an account to create a new denom. It requires a sender address and a sub denomination. The (sender_address, sub_denomination) tuple must be unique and cannot be re-used. The resulting denom created is defined as <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is originally set to be the creator, but this can be changed later. The token denom does not indicate the current admin.";
                                };
                            };
                        };
                    };
                    readonly MsgCreateDenomResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgCreateDenomResponse";
                        readonly definitions: {
                            readonly MsgCreateDenomResponse: {
                                readonly properties: {
                                    readonly new_token_denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Create Denom Response";
                                readonly description: "MsgCreateDenomResponse is the return value of MsgCreateDenom It returns the full string of the newly created denom";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgCreateDenomResponse";
                            readonly definitions: {
                                readonly MsgCreateDenomResponse: {
                                    readonly properties: {
                                        readonly new_token_denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Create Denom Response";
                                    readonly description: "MsgCreateDenomResponse is the return value of MsgCreateDenom It returns the full string of the newly created denom";
                                };
                            };
                        };
                    };
                    readonly MsgMint: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgMint";
                        readonly definitions: {
                            readonly MsgMint: {
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Mint";
                                readonly description: "MsgMint is the sdk.Msg type for allowing an admin account to mint more of a token.  For now, we only support minting to the sender account";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgMint";
                            readonly definitions: {
                                readonly MsgMint: {
                                    readonly properties: {
                                        readonly sender: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            readonly additionalProperties: true;
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Mint";
                                    readonly description: "MsgMint is the sdk.Msg type for allowing an admin account to mint more of a token.  For now, we only support minting to the sender account";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                            };
                        };
                    };
                    readonly MsgMintResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/MsgMintResponse";
                        readonly definitions: {
                            readonly MsgMintResponse: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Msg Mint Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/MsgMintResponse";
                            readonly definitions: {
                                readonly MsgMintResponse: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Msg Mint Response";
                                };
                            };
                        };
                    };
                    readonly QueryDenomAuthorityMetadataRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDenomAuthorityMetadataRequest";
                        readonly definitions: {
                            readonly QueryDenomAuthorityMetadataRequest: {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Denom Authority Metadata Request";
                                readonly description: "QueryDenomAuthorityMetadataRequest defines the request structure for the DenomAuthorityMetadata gRPC query.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDenomAuthorityMetadataRequest";
                            readonly definitions: {
                                readonly QueryDenomAuthorityMetadataRequest: {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Denom Authority Metadata Request";
                                    readonly description: "QueryDenomAuthorityMetadataRequest defines the request structure for the DenomAuthorityMetadata gRPC query.";
                                };
                            };
                        };
                    };
                    readonly QueryDenomAuthorityMetadataResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDenomAuthorityMetadataResponse";
                        readonly definitions: {
                            readonly QueryDenomAuthorityMetadataResponse: {
                                readonly properties: {
                                    readonly authority_metadata: {
                                        readonly $ref: "#/definitions/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata";
                                        readonly additionalProperties: true;
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Denom Authority Metadata Response";
                                readonly description: "QueryDenomAuthorityMetadataResponse defines the response structure for the DenomAuthorityMetadata gRPC query.";
                            };
                            readonly "osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata": {
                                readonly properties: {
                                    readonly admin: {
                                        readonly type: "string";
                                        readonly description: "Can be empty for no admin, or a valid osmosis address";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Denom Authority Metadata";
                                readonly description: "DenomAuthorityMetadata specifies metadata for addresses that have specific capabilities over a token factory denom. Right now there is only one Admin permission, but is planned to be extended to the future.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDenomAuthorityMetadataResponse";
                            readonly definitions: {
                                readonly QueryDenomAuthorityMetadataResponse: {
                                    readonly properties: {
                                        readonly authority_metadata: {
                                            readonly $ref: "#/definitions/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata";
                                            readonly additionalProperties: true;
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Denom Authority Metadata Response";
                                    readonly description: "QueryDenomAuthorityMetadataResponse defines the response structure for the DenomAuthorityMetadata gRPC query.";
                                };
                                readonly "osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata": {
                                    readonly properties: {
                                        readonly admin: {
                                            readonly type: "string";
                                            readonly description: "Can be empty for no admin, or a valid osmosis address";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Denom Authority Metadata";
                                    readonly description: "DenomAuthorityMetadata specifies metadata for addresses that have specific capabilities over a token factory denom. Right now there is only one Admin permission, but is planned to be extended to the future.";
                                };
                            };
                        };
                    };
                    readonly QueryDenomsFromCreatorRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDenomsFromCreatorRequest";
                        readonly definitions: {
                            readonly QueryDenomsFromCreatorRequest: {
                                readonly properties: {
                                    readonly creator: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Denoms From Creator Request";
                                readonly description: "QueryDenomsFromCreatorRequest defines the request structure for the DenomsFromCreator gRPC query.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDenomsFromCreatorRequest";
                            readonly definitions: {
                                readonly QueryDenomsFromCreatorRequest: {
                                    readonly properties: {
                                        readonly creator: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Denoms From Creator Request";
                                    readonly description: "QueryDenomsFromCreatorRequest defines the request structure for the DenomsFromCreator gRPC query.";
                                };
                            };
                        };
                    };
                    readonly QueryDenomsFromCreatorResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDenomsFromCreatorResponse";
                        readonly definitions: {
                            readonly QueryDenomsFromCreatorResponse: {
                                readonly properties: {
                                    readonly denoms: {
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Denoms From Creator Response";
                                readonly description: "QueryDenomsFromCreatorRequest defines the response structure for the DenomsFromCreator gRPC query.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDenomsFromCreatorResponse";
                            readonly definitions: {
                                readonly QueryDenomsFromCreatorResponse: {
                                    readonly properties: {
                                        readonly denoms: {
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Denoms From Creator Response";
                                    readonly description: "QueryDenomsFromCreatorRequest defines the response structure for the DenomsFromCreator gRPC query.";
                                };
                            };
                        };
                    };
                    readonly QueryParamsRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryParamsRequest";
                        readonly definitions: {
                            readonly QueryParamsRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Params Request";
                                readonly description: "QueryParamsRequest is the request type for the Query/Params RPC method.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryParamsRequest";
                            readonly definitions: {
                                readonly QueryParamsRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Params Request";
                                    readonly description: "QueryParamsRequest is the request type for the Query/Params RPC method.";
                                };
                            };
                        };
                    };
                    readonly QueryParamsResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryParamsResponse";
                        readonly definitions: {
                            readonly QueryParamsResponse: {
                                readonly properties: {
                                    readonly params: {
                                        readonly $ref: "#/definitions/osmosis.tokenfactory.v1beta1.Params";
                                        readonly additionalProperties: true;
                                        readonly description: "params defines the parameters of the module.";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Params Response";
                                readonly description: "QueryParamsResponse is the response type for the Query/Params RPC method.";
                            };
                            readonly "cosmos.base.v1beta1.Coin": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Coin";
                                readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                            };
                            readonly "osmosis.tokenfactory.v1beta1.Params": {
                                readonly properties: {
                                    readonly denom_creation_fee: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Params";
                                readonly description: "Params defines the parameters for the tokenfactory module.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryParamsResponse";
                            readonly definitions: {
                                readonly QueryParamsResponse: {
                                    readonly properties: {
                                        readonly params: {
                                            readonly $ref: "#/definitions/osmosis.tokenfactory.v1beta1.Params";
                                            readonly additionalProperties: true;
                                            readonly description: "params defines the parameters of the module.";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Params Response";
                                    readonly description: "QueryParamsResponse is the response type for the Query/Params RPC method.";
                                };
                                readonly "cosmos.base.v1beta1.Coin": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Coin";
                                    readonly description: "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.";
                                };
                                readonly "osmosis.tokenfactory.v1beta1.Params": {
                                    readonly properties: {
                                        readonly denom_creation_fee: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/cosmos.base.v1beta1.Coin";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Params";
                                    readonly description: "Params defines the parameters for the tokenfactory module.";
                                };
                            };
                        };
                    };
                };
            };
            readonly txfees: {
                readonly v1beta1: {
                    readonly QueryBaseDenomRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryBaseDenomRequest";
                        readonly definitions: {
                            readonly QueryBaseDenomRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Base Denom Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryBaseDenomRequest";
                            readonly definitions: {
                                readonly QueryBaseDenomRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Base Denom Request";
                                };
                            };
                        };
                    };
                    readonly QueryBaseDenomResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryBaseDenomResponse";
                        readonly definitions: {
                            readonly QueryBaseDenomResponse: {
                                readonly properties: {
                                    readonly base_denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Base Denom Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryBaseDenomResponse";
                            readonly definitions: {
                                readonly QueryBaseDenomResponse: {
                                    readonly properties: {
                                        readonly base_denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Base Denom Response";
                                };
                            };
                        };
                    };
                    readonly QueryDenomPoolIdRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDenomPoolIdRequest";
                        readonly definitions: {
                            readonly QueryDenomPoolIdRequest: {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Denom Pool Id Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDenomPoolIdRequest";
                            readonly definitions: {
                                readonly QueryDenomPoolIdRequest: {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Denom Pool Id Request";
                                };
                            };
                        };
                    };
                    readonly QueryDenomPoolIdResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDenomPoolIdResponse";
                        readonly definitions: {
                            readonly QueryDenomPoolIdResponse: {
                                readonly properties: {
                                    readonly poolID: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Denom Pool Id Response";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDenomPoolIdResponse";
                            readonly definitions: {
                                readonly QueryDenomPoolIdResponse: {
                                    readonly properties: {
                                        readonly poolID: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Denom Pool Id Response";
                                };
                            };
                        };
                    };
                    readonly QueryDenomSpotPriceRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDenomSpotPriceRequest";
                        readonly definitions: {
                            readonly QueryDenomSpotPriceRequest: {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Denom Spot Price Request";
                                readonly description: "QueryDenomSpotPriceRequest defines grpc request structure for querying spot price for the specified tx fee denom";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDenomSpotPriceRequest";
                            readonly definitions: {
                                readonly QueryDenomSpotPriceRequest: {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Denom Spot Price Request";
                                    readonly description: "QueryDenomSpotPriceRequest defines grpc request structure for querying spot price for the specified tx fee denom";
                                };
                            };
                        };
                    };
                    readonly QueryDenomSpotPriceResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryDenomSpotPriceResponse";
                        readonly definitions: {
                            readonly QueryDenomSpotPriceResponse: {
                                readonly properties: {
                                    readonly poolID: {
                                        readonly type: "string";
                                    };
                                    readonly spot_price: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Denom Spot Price Response";
                                readonly description: "QueryDenomSpotPriceRequest defines grpc response structure for querying spot price for the specified tx fee denom";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryDenomSpotPriceResponse";
                            readonly definitions: {
                                readonly QueryDenomSpotPriceResponse: {
                                    readonly properties: {
                                        readonly poolID: {
                                            readonly type: "string";
                                        };
                                        readonly spot_price: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Denom Spot Price Response";
                                    readonly description: "QueryDenomSpotPriceRequest defines grpc response structure for querying spot price for the specified tx fee denom";
                                };
                            };
                        };
                    };
                    readonly QueryFeeTokensRequest: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryFeeTokensRequest";
                        readonly definitions: {
                            readonly QueryFeeTokensRequest: {
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Fee Tokens Request";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryFeeTokensRequest";
                            readonly definitions: {
                                readonly QueryFeeTokensRequest: {
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Fee Tokens Request";
                                };
                            };
                        };
                    };
                    readonly QueryFeeTokensResponse: {
                        readonly $schema: "http://json-schema.org/draft-04/schema#";
                        readonly $ref: "#/definitions/QueryFeeTokensResponse";
                        readonly definitions: {
                            readonly QueryFeeTokensResponse: {
                                readonly properties: {
                                    readonly fee_tokens: {
                                        readonly items: {
                                            readonly $ref: "#/definitions/osmosis.txfees.v1beta1.FeeToken";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Query Fee Tokens Response";
                            };
                            readonly "osmosis.txfees.v1beta1.FeeToken": {
                                readonly properties: {
                                    readonly denom: {
                                        readonly type: "string";
                                    };
                                    readonly poolID: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: true;
                                readonly type: "object";
                                readonly title: "Fee Token";
                                readonly description: "FeeToken is a struct that specifies a coin denom, and pool ID pair. This marks the token as eligible for use as a tx fee asset in Osmosis. Its price in osmo is derived through looking at the provided pool ID. The pool ID must have osmo as one of its assets.";
                            };
                        };
                        readonly default: {
                            readonly $schema: "http://json-schema.org/draft-04/schema#";
                            readonly $ref: "#/definitions/QueryFeeTokensResponse";
                            readonly definitions: {
                                readonly QueryFeeTokensResponse: {
                                    readonly properties: {
                                        readonly fee_tokens: {
                                            readonly items: {
                                                readonly $ref: "#/definitions/osmosis.txfees.v1beta1.FeeToken";
                                            };
                                            readonly type: "array";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Query Fee Tokens Response";
                                };
                                readonly "osmosis.txfees.v1beta1.FeeToken": {
                                    readonly properties: {
                                        readonly denom: {
                                            readonly type: "string";
                                        };
                                        readonly poolID: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: true;
                                    readonly type: "object";
                                    readonly title: "Fee Token";
                                    readonly description: "FeeToken is a struct that specifies a coin denom, and pool ID pair. This marks the token as eligible for use as a tx fee asset in Osmosis. Its price in osmo is derived through looking at the provided pool ID. The pool ID must have osmo as one of its assets.";
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
