"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "osmosis": {
        "epochs": {
            "QueryCurrentEpochRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryCurrentEpochRequest",
                "definitions": {
                    "QueryCurrentEpochRequest": {
                        "properties": {
                            "identifier": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Current Epoch Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryCurrentEpochRequest",
                    "definitions": {
                        "QueryCurrentEpochRequest": {
                            "properties": {
                                "identifier": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Current Epoch Request"
                        }
                    }
                }
            },
            "QueryCurrentEpochResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryCurrentEpochResponse",
                "definitions": {
                    "QueryCurrentEpochResponse": {
                        "properties": {
                            "current_epoch": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Current Epoch Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryCurrentEpochResponse",
                    "definitions": {
                        "QueryCurrentEpochResponse": {
                            "properties": {
                                "current_epoch": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Current Epoch Response"
                        }
                    }
                }
            },
            "QueryEpochsInfoRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryEpochsInfoRequest",
                "definitions": {
                    "QueryEpochsInfoRequest": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Epochs Info Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryEpochsInfoRequest",
                    "definitions": {
                        "QueryEpochsInfoRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Epochs Info Request"
                        }
                    }
                }
            },
            "QueryEpochsInfoResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryEpochsInfoResponse",
                "definitions": {
                    "QueryEpochsInfoResponse": {
                        "properties": {
                            "epochs": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.epochs.v1beta1.EpochInfo"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Epochs Info Response"
                    },
                    "osmosis.epochs.v1beta1.EpochInfo": {
                        "properties": {
                            "identifier": {
                                "type": "string",
                                "description": "identifier is a unique reference to this particular timer."
                            },
                            "start_time": {
                                "type": "string",
                                "description": "start_time is the time at which the timer first ever ticks. If start_time is in the future, the epoch will not begin until the start time.",
                                "format": "date-time"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "duration is the time in between epoch ticks. In order for intended behavior to be met, duration should be greater than the chains expected block time. Duration must be non-zero.",
                                "format": "regex"
                            },
                            "current_epoch": {
                                "type": "string",
                                "description": "current_epoch is the current epoch number, or in other words, how many times has the timer 'ticked'. The first tick (current_epoch=1) is defined as the first block whose blocktime is greater than the EpochInfo start_time."
                            },
                            "current_epoch_start_time": {
                                "type": "string",
                                "description": "current_epoch_start_time describes the start time of the current timer interval. The interval is (current_epoch_start_time, current_epoch_start_time + duration] When the timer ticks, this is set to current_epoch_start_time = last_epoch_start_time + duration only one timer tick for a given identifier can occur per block. NOTE! The current_epoch_start_time may diverge significantly from the wall-clock time the epoch began at. Wall-clock time of epoch start may be >> current_epoch_start_time. Suppose current_epoch_start_time = 10, duration = 5. Suppose the chain goes offline at t=14, and comes back online at t=30, and produces blocks at every successive time. (t=31, 32, etc.) * The t=30 block will start the epoch for (10, 15] * The t=31 block will start the epoch for (15, 20] * The t=32 block will start the epoch for (20, 25] * The t=33 block will start the epoch for (25, 30] * The t=34 block will start the epoch for (30, 35] * The **t=36** block will start the epoch for (35, 40]",
                                "format": "date-time"
                            },
                            "epoch_counting_started": {
                                "type": "boolean",
                                "description": "epoch_counting_started is a boolean, that indicates whether this epoch timer has began yet."
                            },
                            "current_epoch_start_height": {
                                "type": "string",
                                "description": "current_epoch_start_height is the block height at which the current epoch started. (The block height at which the timer last ticked)"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Epoch Info",
                        "description": "EpochInfo is a struct that describes the data going into a timer defined by the x/epochs module."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryEpochsInfoResponse",
                    "definitions": {
                        "QueryEpochsInfoResponse": {
                            "properties": {
                                "epochs": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.epochs.v1beta1.EpochInfo"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Epochs Info Response"
                        },
                        "osmosis.epochs.v1beta1.EpochInfo": {
                            "properties": {
                                "identifier": {
                                    "type": "string",
                                    "description": "identifier is a unique reference to this particular timer."
                                },
                                "start_time": {
                                    "type": "string",
                                    "description": "start_time is the time at which the timer first ever ticks. If start_time is in the future, the epoch will not begin until the start time.",
                                    "format": "date-time"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "duration is the time in between epoch ticks. In order for intended behavior to be met, duration should be greater than the chains expected block time. Duration must be non-zero.",
                                    "format": "regex"
                                },
                                "current_epoch": {
                                    "type": "string",
                                    "description": "current_epoch is the current epoch number, or in other words, how many times has the timer 'ticked'. The first tick (current_epoch=1) is defined as the first block whose blocktime is greater than the EpochInfo start_time."
                                },
                                "current_epoch_start_time": {
                                    "type": "string",
                                    "description": "current_epoch_start_time describes the start time of the current timer interval. The interval is (current_epoch_start_time, current_epoch_start_time + duration] When the timer ticks, this is set to current_epoch_start_time = last_epoch_start_time + duration only one timer tick for a given identifier can occur per block. NOTE! The current_epoch_start_time may diverge significantly from the wall-clock time the epoch began at. Wall-clock time of epoch start may be >> current_epoch_start_time. Suppose current_epoch_start_time = 10, duration = 5. Suppose the chain goes offline at t=14, and comes back online at t=30, and produces blocks at every successive time. (t=31, 32, etc.) * The t=30 block will start the epoch for (10, 15] * The t=31 block will start the epoch for (15, 20] * The t=32 block will start the epoch for (20, 25] * The t=33 block will start the epoch for (25, 30] * The t=34 block will start the epoch for (30, 35] * The **t=36** block will start the epoch for (35, 40]",
                                    "format": "date-time"
                                },
                                "epoch_counting_started": {
                                    "type": "boolean",
                                    "description": "epoch_counting_started is a boolean, that indicates whether this epoch timer has began yet."
                                },
                                "current_epoch_start_height": {
                                    "type": "string",
                                    "description": "current_epoch_start_height is the block height at which the current epoch started. (The block height at which the timer last ticked)"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Epoch Info",
                            "description": "EpochInfo is a struct that describes the data going into a timer defined by the x/epochs module."
                        }
                    }
                }
            }
        },
        "gamm": {
            "pool-models": {
                "balancer": {
                    "tx": {
                        "MsgCreateBalancerPool": {
                            "$schema": "http://json-schema.org/draft-04/schema#",
                            "$ref": "#/definitions/MsgCreateBalancerPool",
                            "definitions": {
                                "MsgCreateBalancerPool": {
                                    "properties": {
                                        "sender": {
                                            "type": "string"
                                        },
                                        "pool_params": {
                                            "$ref": "#/definitions/osmosis.gamm.v1beta1.PoolParams",
                                            "additionalProperties": true
                                        },
                                        "pool_assets": {
                                            "items": {
                                                "$ref": "#/definitions/osmosis.gamm.v1beta1.PoolAsset"
                                            },
                                            "type": "array"
                                        },
                                        "future_pool_governor": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Msg Create Balancer Pool",
                                    "description": "===================== MsgCreatePool"
                                },
                                "cosmos.base.v1beta1.Coin": {
                                    "properties": {
                                        "denom": {
                                            "type": "string"
                                        },
                                        "amount": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Coin",
                                    "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                                },
                                "osmosis.gamm.v1beta1.PoolAsset": {
                                    "properties": {
                                        "token": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                            "additionalProperties": true,
                                            "description": "Coins we are talking about, the denomination must be unique amongst all PoolAssets for this pool."
                                        },
                                        "weight": {
                                            "type": "string",
                                            "description": "Weight that is not normalized. This weight must be less than 2^50"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Pool Asset",
                                    "description": "Pool asset is an internal struct that combines the amount of the token in the pool, and its balancer weight. This is an awkward packaging of data, and should be revisited in a future state migration."
                                },
                                "osmosis.gamm.v1beta1.PoolParams": {
                                    "properties": {
                                        "swap_fee": {
                                            "type": "string"
                                        },
                                        "exit_fee": {
                                            "type": "string"
                                        },
                                        "smooth_weight_change_params": {
                                            "$ref": "#/definitions/osmosis.gamm.v1beta1.SmoothWeightChangeParams",
                                            "additionalProperties": true
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Pool Params",
                                    "description": "PoolParams defined the parameters that will be managed by the pool governance in the future. This params are not managed by the chain governance. Instead they will be managed by the token holders of the pool. The pool's token holders are specified in future_pool_governor."
                                },
                                "osmosis.gamm.v1beta1.SmoothWeightChangeParams": {
                                    "properties": {
                                        "start_time": {
                                            "type": "string",
                                            "description": "The start time for beginning the weight change. If a parameter change / pool instantiation leaves this blank, it should be generated by the state_machine as the current time.",
                                            "format": "date-time"
                                        },
                                        "duration": {
                                            "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                            "type": "string",
                                            "description": "Duration for the weights to change over",
                                            "format": "regex"
                                        },
                                        "initial_pool_weights": {
                                            "items": {
                                                "$ref": "#/definitions/osmosis.gamm.v1beta1.PoolAsset"
                                            },
                                            "type": "array",
                                            "description": "The initial pool weights. These are copied from the pool's settings at the time of weight change instantiation. The amount PoolAsset.token.amount field is ignored if present, future type refactorings should just have a type with the denom & weight here."
                                        },
                                        "target_pool_weights": {
                                            "items": {
                                                "$ref": "#/definitions/osmosis.gamm.v1beta1.PoolAsset"
                                            },
                                            "type": "array",
                                            "description": "The target pool weights. The pool weights will change linearly with respect to time between start_time, and start_time + duration. The amount PoolAsset.token.amount field is ignored if present, future type refactorings should just have a type with the denom & weight here.  Intermediate variable for the 'slope' of pool weights. This is equal to (target_pool_weights - initial_pool_weights) / (duration) TODO: Work out precision, and decide if this is good to add repeated PoolAsset poolWeightSlope = 5 [  (gogoproto.moretags) = \"yaml:\\\"pool_weight_slope\\\"\",  (gogoproto.nullable) = false ];"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Smooth Weight Change Params",
                                    "description": "Parameters for changing the weights in a balancer pool smoothly from a start weight and end weight over a period of time. Currently, the only smooth change supported is linear changing between the two weights, but more types may be added in the future. When these parameters are set, the weight w(t) for pool time `t` is the following:   t <= start_time: w(t) = initial_pool_weights   start_time < t <= start_time + duration:     w(t) = initial_pool_weights + (t - start_time) *       (target_pool_weights - initial_pool_weights) / (duration)   t > start_time + duration: w(t) = target_pool_weights"
                                }
                            },
                            "default": {
                                "$schema": "http://json-schema.org/draft-04/schema#",
                                "$ref": "#/definitions/MsgCreateBalancerPool",
                                "definitions": {
                                    "MsgCreateBalancerPool": {
                                        "properties": {
                                            "sender": {
                                                "type": "string"
                                            },
                                            "pool_params": {
                                                "$ref": "#/definitions/osmosis.gamm.v1beta1.PoolParams",
                                                "additionalProperties": true
                                            },
                                            "pool_assets": {
                                                "items": {
                                                    "$ref": "#/definitions/osmosis.gamm.v1beta1.PoolAsset"
                                                },
                                                "type": "array"
                                            },
                                            "future_pool_governor": {
                                                "type": "string"
                                            }
                                        },
                                        "additionalProperties": true,
                                        "type": "object",
                                        "title": "Msg Create Balancer Pool",
                                        "description": "===================== MsgCreatePool"
                                    },
                                    "cosmos.base.v1beta1.Coin": {
                                        "properties": {
                                            "denom": {
                                                "type": "string"
                                            },
                                            "amount": {
                                                "type": "string"
                                            }
                                        },
                                        "additionalProperties": true,
                                        "type": "object",
                                        "title": "Coin",
                                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                                    },
                                    "osmosis.gamm.v1beta1.PoolAsset": {
                                        "properties": {
                                            "token": {
                                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                                "additionalProperties": true,
                                                "description": "Coins we are talking about, the denomination must be unique amongst all PoolAssets for this pool."
                                            },
                                            "weight": {
                                                "type": "string",
                                                "description": "Weight that is not normalized. This weight must be less than 2^50"
                                            }
                                        },
                                        "additionalProperties": true,
                                        "type": "object",
                                        "title": "Pool Asset",
                                        "description": "Pool asset is an internal struct that combines the amount of the token in the pool, and its balancer weight. This is an awkward packaging of data, and should be revisited in a future state migration."
                                    },
                                    "osmosis.gamm.v1beta1.PoolParams": {
                                        "properties": {
                                            "swap_fee": {
                                                "type": "string"
                                            },
                                            "exit_fee": {
                                                "type": "string"
                                            },
                                            "smooth_weight_change_params": {
                                                "$ref": "#/definitions/osmosis.gamm.v1beta1.SmoothWeightChangeParams",
                                                "additionalProperties": true
                                            }
                                        },
                                        "additionalProperties": true,
                                        "type": "object",
                                        "title": "Pool Params",
                                        "description": "PoolParams defined the parameters that will be managed by the pool governance in the future. This params are not managed by the chain governance. Instead they will be managed by the token holders of the pool. The pool's token holders are specified in future_pool_governor."
                                    },
                                    "osmosis.gamm.v1beta1.SmoothWeightChangeParams": {
                                        "properties": {
                                            "start_time": {
                                                "type": "string",
                                                "description": "The start time for beginning the weight change. If a parameter change / pool instantiation leaves this blank, it should be generated by the state_machine as the current time.",
                                                "format": "date-time"
                                            },
                                            "duration": {
                                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                                "type": "string",
                                                "description": "Duration for the weights to change over",
                                                "format": "regex"
                                            },
                                            "initial_pool_weights": {
                                                "items": {
                                                    "$ref": "#/definitions/osmosis.gamm.v1beta1.PoolAsset"
                                                },
                                                "type": "array",
                                                "description": "The initial pool weights. These are copied from the pool's settings at the time of weight change instantiation. The amount PoolAsset.token.amount field is ignored if present, future type refactorings should just have a type with the denom & weight here."
                                            },
                                            "target_pool_weights": {
                                                "items": {
                                                    "$ref": "#/definitions/osmosis.gamm.v1beta1.PoolAsset"
                                                },
                                                "type": "array",
                                                "description": "The target pool weights. The pool weights will change linearly with respect to time between start_time, and start_time + duration. The amount PoolAsset.token.amount field is ignored if present, future type refactorings should just have a type with the denom & weight here.  Intermediate variable for the 'slope' of pool weights. This is equal to (target_pool_weights - initial_pool_weights) / (duration) TODO: Work out precision, and decide if this is good to add repeated PoolAsset poolWeightSlope = 5 [  (gogoproto.moretags) = \"yaml:\\\"pool_weight_slope\\\"\",  (gogoproto.nullable) = false ];"
                                            }
                                        },
                                        "additionalProperties": true,
                                        "type": "object",
                                        "title": "Smooth Weight Change Params",
                                        "description": "Parameters for changing the weights in a balancer pool smoothly from a start weight and end weight over a period of time. Currently, the only smooth change supported is linear changing between the two weights, but more types may be added in the future. When these parameters are set, the weight w(t) for pool time `t` is the following:   t <= start_time: w(t) = initial_pool_weights   start_time < t <= start_time + duration:     w(t) = initial_pool_weights + (t - start_time) *       (target_pool_weights - initial_pool_weights) / (duration)   t > start_time + duration: w(t) = target_pool_weights"
                                    }
                                }
                            }
                        },
                        "MsgCreateBalancerPoolResponse": {
                            "$schema": "http://json-schema.org/draft-04/schema#",
                            "$ref": "#/definitions/MsgCreateBalancerPoolResponse",
                            "definitions": {
                                "MsgCreateBalancerPoolResponse": {
                                    "properties": {
                                        "pool_id": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Msg Create Balancer Pool Response",
                                    "description": "Returns the poolID"
                                }
                            },
                            "default": {
                                "$schema": "http://json-schema.org/draft-04/schema#",
                                "$ref": "#/definitions/MsgCreateBalancerPoolResponse",
                                "definitions": {
                                    "MsgCreateBalancerPoolResponse": {
                                        "properties": {
                                            "pool_id": {
                                                "type": "string"
                                            }
                                        },
                                        "additionalProperties": true,
                                        "type": "object",
                                        "title": "Msg Create Balancer Pool Response",
                                        "description": "Returns the poolID"
                                    }
                                }
                            }
                        }
                    }
                },
                "stableswap": {
                    "MsgCreateStableswapPool": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgCreateStableswapPool",
                        "definitions": {
                            "MsgCreateStableswapPool": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_params": {
                                        "$ref": "#/definitions/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
                                        "additionalProperties": true
                                    },
                                    "initial_pool_liquidity": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array"
                                    },
                                    "future_pool_governor": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Create Stableswap Pool",
                                "description": "===================== MsgCreatePool"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            },
                            "osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams": {
                                "properties": {
                                    "swap_fee": {
                                        "type": "string"
                                    },
                                    "exit_fee": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Pool Params",
                                "description": "PoolParams defined the parameters that will be managed by the pool governance in the future. This params are not managed by the chain governance. Instead they will be managed by the token holders of the pool. The pool's token holders are specified in future_pool_governor."
                            }
                        },
                        "default": {
                            "$schema": "http://json-schema.org/draft-04/schema#",
                            "$ref": "#/definitions/MsgCreateStableswapPool",
                            "definitions": {
                                "MsgCreateStableswapPool": {
                                    "properties": {
                                        "sender": {
                                            "type": "string"
                                        },
                                        "pool_params": {
                                            "$ref": "#/definitions/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
                                            "additionalProperties": true
                                        },
                                        "initial_pool_liquidity": {
                                            "items": {
                                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                            },
                                            "type": "array"
                                        },
                                        "future_pool_governor": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Msg Create Stableswap Pool",
                                    "description": "===================== MsgCreatePool"
                                },
                                "cosmos.base.v1beta1.Coin": {
                                    "properties": {
                                        "denom": {
                                            "type": "string"
                                        },
                                        "amount": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Coin",
                                    "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                                },
                                "osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams": {
                                    "properties": {
                                        "swap_fee": {
                                            "type": "string"
                                        },
                                        "exit_fee": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Pool Params",
                                    "description": "PoolParams defined the parameters that will be managed by the pool governance in the future. This params are not managed by the chain governance. Instead they will be managed by the token holders of the pool. The pool's token holders are specified in future_pool_governor."
                                }
                            }
                        }
                    },
                    "MsgCreateStableswapPoolResponse": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgCreateStableswapPoolResponse",
                        "definitions": {
                            "MsgCreateStableswapPoolResponse": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Create Stableswap Pool Response",
                                "description": "Returns a poolID with custom poolName."
                            }
                        },
                        "default": {
                            "$schema": "http://json-schema.org/draft-04/schema#",
                            "$ref": "#/definitions/MsgCreateStableswapPoolResponse",
                            "definitions": {
                                "MsgCreateStableswapPoolResponse": {
                                    "properties": {
                                        "pool_id": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Msg Create Stableswap Pool Response",
                                    "description": "Returns a poolID with custom poolName."
                                }
                            }
                        }
                    },
                    "MsgStableSwapAdjustScalingFactors": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgStableSwapAdjustScalingFactors",
                        "definitions": {
                            "MsgStableSwapAdjustScalingFactors": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "scaling_factors": {
                                        "items": {
                                            "type": "string"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Stable Swap Adjust Scaling Factors",
                                "description": "Sender must be the pool's scaling_factor_governor in order for the tx to succeed. Adjusts stableswap scaling factors."
                            }
                        },
                        "default": {
                            "$schema": "http://json-schema.org/draft-04/schema#",
                            "$ref": "#/definitions/MsgStableSwapAdjustScalingFactors",
                            "definitions": {
                                "MsgStableSwapAdjustScalingFactors": {
                                    "properties": {
                                        "sender": {
                                            "type": "string"
                                        },
                                        "pool_id": {
                                            "type": "string"
                                        },
                                        "scaling_factors": {
                                            "items": {
                                                "type": "string"
                                            },
                                            "type": "array"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Msg Stable Swap Adjust Scaling Factors",
                                    "description": "Sender must be the pool's scaling_factor_governor in order for the tx to succeed. Adjusts stableswap scaling factors."
                                }
                            }
                        }
                    },
                    "MsgStableSwapAdjustScalingFactorsResponse": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgStableSwapAdjustScalingFactorsResponse",
                        "definitions": {
                            "MsgStableSwapAdjustScalingFactorsResponse": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Stable Swap Adjust Scaling Factors Response"
                            }
                        },
                        "default": {
                            "$schema": "http://json-schema.org/draft-04/schema#",
                            "$ref": "#/definitions/MsgStableSwapAdjustScalingFactorsResponse",
                            "definitions": {
                                "MsgStableSwapAdjustScalingFactorsResponse": {
                                    "additionalProperties": true,
                                    "type": "object",
                                    "title": "Msg Stable Swap Adjust Scaling Factors Response"
                                }
                            }
                        }
                    }
                }
            },
            "v1beta1": {
                "MsgExitPool": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgExitPool",
                    "definitions": {
                        "MsgExitPool": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "pool_id": {
                                    "type": "string"
                                },
                                "share_in_amount": {
                                    "type": "string"
                                },
                                "token_out_mins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Exit Pool",
                            "description": "===================== MsgExitPool"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgExitPool",
                        "definitions": {
                            "MsgExitPool": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "share_in_amount": {
                                        "type": "string"
                                    },
                                    "token_out_mins": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Exit Pool",
                                "description": "===================== MsgExitPool"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "MsgExitPoolResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgExitPoolResponse",
                    "definitions": {
                        "MsgExitPoolResponse": {
                            "properties": {
                                "token_out": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Exit Pool Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgExitPoolResponse",
                        "definitions": {
                            "MsgExitPoolResponse": {
                                "properties": {
                                    "token_out": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Exit Pool Response"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "MsgExitSwapExternAmountOut": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgExitSwapExternAmountOut",
                    "definitions": {
                        "MsgExitSwapExternAmountOut": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_out": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                },
                                "share_in_max_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Exit Swap Extern Amount Out",
                            "description": "===================== MsgExitSwapExternAmountOut"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgExitSwapExternAmountOut",
                        "definitions": {
                            "MsgExitSwapExternAmountOut": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_out": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                        "additionalProperties": true
                                    },
                                    "share_in_max_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Exit Swap Extern Amount Out",
                                "description": "===================== MsgExitSwapExternAmountOut"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "MsgExitSwapExternAmountOutResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgExitSwapExternAmountOutResponse",
                    "definitions": {
                        "MsgExitSwapExternAmountOutResponse": {
                            "properties": {
                                "share_in_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Exit Swap Extern Amount Out Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgExitSwapExternAmountOutResponse",
                        "definitions": {
                            "MsgExitSwapExternAmountOutResponse": {
                                "properties": {
                                    "share_in_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Exit Swap Extern Amount Out Response"
                            }
                        }
                    }
                },
                "MsgExitSwapShareAmountIn": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgExitSwapShareAmountIn",
                    "definitions": {
                        "MsgExitSwapShareAmountIn": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_out_denom": {
                                    "type": "string"
                                },
                                "share_in_amount": {
                                    "type": "string"
                                },
                                "token_out_min_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Exit Swap Share Amount In",
                            "description": "===================== MsgExitSwapShareAmountIn"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgExitSwapShareAmountIn",
                        "definitions": {
                            "MsgExitSwapShareAmountIn": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_out_denom": {
                                        "type": "string"
                                    },
                                    "share_in_amount": {
                                        "type": "string"
                                    },
                                    "token_out_min_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Exit Swap Share Amount In",
                                "description": "===================== MsgExitSwapShareAmountIn"
                            }
                        }
                    }
                },
                "MsgExitSwapShareAmountInResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgExitSwapShareAmountInResponse",
                    "definitions": {
                        "MsgExitSwapShareAmountInResponse": {
                            "properties": {
                                "token_out_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Exit Swap Share Amount In Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgExitSwapShareAmountInResponse",
                        "definitions": {
                            "MsgExitSwapShareAmountInResponse": {
                                "properties": {
                                    "token_out_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Exit Swap Share Amount In Response"
                            }
                        }
                    }
                },
                "MsgJoinPool": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgJoinPool",
                    "definitions": {
                        "MsgJoinPool": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "pool_id": {
                                    "type": "string"
                                },
                                "share_out_amount": {
                                    "type": "string"
                                },
                                "token_in_maxs": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Join Pool",
                            "description": "===================== MsgJoinPool This is really MsgJoinPoolNoSwap"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgJoinPool",
                        "definitions": {
                            "MsgJoinPool": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "share_out_amount": {
                                        "type": "string"
                                    },
                                    "token_in_maxs": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Join Pool",
                                "description": "===================== MsgJoinPool This is really MsgJoinPoolNoSwap"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "MsgJoinPoolResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgJoinPoolResponse",
                    "definitions": {
                        "MsgJoinPoolResponse": {
                            "properties": {
                                "share_out_amount": {
                                    "type": "string"
                                },
                                "token_in": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Join Pool Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgJoinPoolResponse",
                        "definitions": {
                            "MsgJoinPoolResponse": {
                                "properties": {
                                    "share_out_amount": {
                                        "type": "string"
                                    },
                                    "token_in": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Join Pool Response"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "MsgJoinSwapExternAmountIn": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgJoinSwapExternAmountIn",
                    "definitions": {
                        "MsgJoinSwapExternAmountIn": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_in": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                },
                                "share_out_min_amount": {
                                    "type": "string",
                                    "description": "repeated cosmos.base.v1beta1.Coin tokensIn = 5 [   (gogoproto.moretags) = \"yaml:\\\"tokens_in\\\"\",   (gogoproto.nullable) = false ];"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Join Swap Extern Amount In",
                            "description": "===================== MsgJoinSwapExternAmountIn TODO: Rename to MsgJoinSwapExactAmountIn"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgJoinSwapExternAmountIn",
                        "definitions": {
                            "MsgJoinSwapExternAmountIn": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_in": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                        "additionalProperties": true
                                    },
                                    "share_out_min_amount": {
                                        "type": "string",
                                        "description": "repeated cosmos.base.v1beta1.Coin tokensIn = 5 [   (gogoproto.moretags) = \"yaml:\\\"tokens_in\\\"\",   (gogoproto.nullable) = false ];"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Join Swap Extern Amount In",
                                "description": "===================== MsgJoinSwapExternAmountIn TODO: Rename to MsgJoinSwapExactAmountIn"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "MsgJoinSwapExternAmountInResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgJoinSwapExternAmountInResponse",
                    "definitions": {
                        "MsgJoinSwapExternAmountInResponse": {
                            "properties": {
                                "share_out_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Join Swap Extern Amount In Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgJoinSwapExternAmountInResponse",
                        "definitions": {
                            "MsgJoinSwapExternAmountInResponse": {
                                "properties": {
                                    "share_out_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Join Swap Extern Amount In Response"
                            }
                        }
                    }
                },
                "MsgJoinSwapShareAmountOut": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgJoinSwapShareAmountOut",
                    "definitions": {
                        "MsgJoinSwapShareAmountOut": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_in_denom": {
                                    "type": "string"
                                },
                                "share_out_amount": {
                                    "type": "string"
                                },
                                "token_in_max_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Join Swap Share Amount Out",
                            "description": "===================== MsgJoinSwapShareAmountOut"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgJoinSwapShareAmountOut",
                        "definitions": {
                            "MsgJoinSwapShareAmountOut": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_in_denom": {
                                        "type": "string"
                                    },
                                    "share_out_amount": {
                                        "type": "string"
                                    },
                                    "token_in_max_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Join Swap Share Amount Out",
                                "description": "===================== MsgJoinSwapShareAmountOut"
                            }
                        }
                    }
                },
                "MsgJoinSwapShareAmountOutResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgJoinSwapShareAmountOutResponse",
                    "definitions": {
                        "MsgJoinSwapShareAmountOutResponse": {
                            "properties": {
                                "token_in_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Join Swap Share Amount Out Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgJoinSwapShareAmountOutResponse",
                        "definitions": {
                            "MsgJoinSwapShareAmountOutResponse": {
                                "properties": {
                                    "token_in_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Join Swap Share Amount Out Response"
                            }
                        }
                    }
                },
                "MsgSwapExactAmountIn": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSwapExactAmountIn",
                    "definitions": {
                        "MsgSwapExactAmountIn": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "routes": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.gamm.v1beta1.SwapAmountInRoute"
                                    },
                                    "type": "array"
                                },
                                "token_in": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                },
                                "token_out_min_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Swap Exact Amount In"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.gamm.v1beta1.SwapAmountInRoute": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_out_denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Swap Amount In Route",
                            "description": "===================== MsgSwapExactAmountIn"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgSwapExactAmountIn",
                        "definitions": {
                            "MsgSwapExactAmountIn": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "routes": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.gamm.v1beta1.SwapAmountInRoute"
                                        },
                                        "type": "array"
                                    },
                                    "token_in": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                        "additionalProperties": true
                                    },
                                    "token_out_min_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Swap Exact Amount In"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            },
                            "osmosis.gamm.v1beta1.SwapAmountInRoute": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_out_denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Swap Amount In Route",
                                "description": "===================== MsgSwapExactAmountIn"
                            }
                        }
                    }
                },
                "MsgSwapExactAmountInResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSwapExactAmountInResponse",
                    "definitions": {
                        "MsgSwapExactAmountInResponse": {
                            "properties": {
                                "token_out_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Swap Exact Amount In Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgSwapExactAmountInResponse",
                        "definitions": {
                            "MsgSwapExactAmountInResponse": {
                                "properties": {
                                    "token_out_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Swap Exact Amount In Response"
                            }
                        }
                    }
                },
                "MsgSwapExactAmountOut": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSwapExactAmountOut",
                    "definitions": {
                        "MsgSwapExactAmountOut": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "routes": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.gamm.v1beta1.SwapAmountOutRoute"
                                    },
                                    "type": "array"
                                },
                                "token_in_max_amount": {
                                    "type": "string"
                                },
                                "token_out": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Swap Exact Amount Out"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.gamm.v1beta1.SwapAmountOutRoute": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_in_denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Swap Amount Out Route",
                            "description": "===================== MsgSwapExactAmountOut"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgSwapExactAmountOut",
                        "definitions": {
                            "MsgSwapExactAmountOut": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "routes": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.gamm.v1beta1.SwapAmountOutRoute"
                                        },
                                        "type": "array"
                                    },
                                    "token_in_max_amount": {
                                        "type": "string"
                                    },
                                    "token_out": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                        "additionalProperties": true
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Swap Exact Amount Out"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            },
                            "osmosis.gamm.v1beta1.SwapAmountOutRoute": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_in_denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Swap Amount Out Route",
                                "description": "===================== MsgSwapExactAmountOut"
                            }
                        }
                    }
                },
                "MsgSwapExactAmountOutResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSwapExactAmountOutResponse",
                    "definitions": {
                        "MsgSwapExactAmountOutResponse": {
                            "properties": {
                                "token_in_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Swap Exact Amount Out Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgSwapExactAmountOutResponse",
                        "definitions": {
                            "MsgSwapExactAmountOutResponse": {
                                "properties": {
                                    "token_in_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Swap Exact Amount Out Response"
                            }
                        }
                    }
                },
                "QueryNumPoolsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryNumPoolsRequest",
                    "definitions": {
                        "QueryNumPoolsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Num Pools Request",
                            "description": "=============================== NumPools"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryNumPoolsRequest",
                        "definitions": {
                            "QueryNumPoolsRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Num Pools Request",
                                "description": "=============================== NumPools"
                            }
                        }
                    }
                },
                "QueryNumPoolsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryNumPoolsResponse",
                    "definitions": {
                        "QueryNumPoolsResponse": {
                            "properties": {
                                "num_pools": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Num Pools Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryNumPoolsResponse",
                        "definitions": {
                            "QueryNumPoolsResponse": {
                                "properties": {
                                    "num_pools": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Num Pools Response"
                            }
                        }
                    }
                },
                "QueryPoolParamsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryPoolParamsRequest",
                    "definitions": {
                        "QueryPoolParamsRequest": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Pool Params Request",
                            "description": "=============================== PoolParams"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryPoolParamsRequest",
                        "definitions": {
                            "QueryPoolParamsRequest": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Pool Params Request",
                                "description": "=============================== PoolParams"
                            }
                        }
                    }
                },
                "QueryPoolParamsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryPoolParamsResponse",
                    "definitions": {
                        "QueryPoolParamsResponse": {
                            "properties": {
                                "params": {
                                    "properties": {
                                        "type_url": {
                                            "type": "string",
                                            "description": "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics."
                                        },
                                        "value": {
                                            "type": "string",
                                            "description": "Must be a valid serialized protocol buffer of the above specified type.",
                                            "format": "binary",
                                            "binaryEncoding": "base64"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Pool Params Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryPoolParamsResponse",
                        "definitions": {
                            "QueryPoolParamsResponse": {
                                "properties": {
                                    "params": {
                                        "properties": {
                                            "type_url": {
                                                "type": "string",
                                                "description": "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics."
                                            },
                                            "value": {
                                                "type": "string",
                                                "description": "Must be a valid serialized protocol buffer of the above specified type.",
                                                "format": "binary",
                                                "binaryEncoding": "base64"
                                            }
                                        },
                                        "additionalProperties": true,
                                        "type": "object"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Pool Params Response"
                            }
                        }
                    }
                },
                "QueryPoolRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryPoolRequest",
                    "definitions": {
                        "QueryPoolRequest": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Pool Request",
                            "description": "=============================== Pool"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryPoolRequest",
                        "definitions": {
                            "QueryPoolRequest": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Pool Request",
                                "description": "=============================== Pool"
                            }
                        }
                    }
                },
                "QueryPoolResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryPoolResponse",
                    "definitions": {
                        "QueryPoolResponse": {
                            "properties": {
                                "pool": {
                                    "properties": {
                                        "type_url": {
                                            "type": "string",
                                            "description": "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics."
                                        },
                                        "value": {
                                            "type": "string",
                                            "description": "Must be a valid serialized protocol buffer of the above specified type.",
                                            "format": "binary",
                                            "binaryEncoding": "base64"
                                        }
                                    },
                                    "additionalProperties": true,
                                    "type": "object"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Pool Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryPoolResponse",
                        "definitions": {
                            "QueryPoolResponse": {
                                "properties": {
                                    "pool": {
                                        "properties": {
                                            "type_url": {
                                                "type": "string",
                                                "description": "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics."
                                            },
                                            "value": {
                                                "type": "string",
                                                "description": "Must be a valid serialized protocol buffer of the above specified type.",
                                                "format": "binary",
                                                "binaryEncoding": "base64"
                                            }
                                        },
                                        "additionalProperties": true,
                                        "type": "object"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Pool Response"
                            }
                        }
                    }
                },
                "QueryPoolsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryPoolsRequest",
                    "definitions": {
                        "QueryPoolsRequest": {
                            "properties": {
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                    "additionalProperties": true,
                                    "description": "pagination defines an optional pagination for the request."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Pools Request",
                            "description": "=============================== Pools"
                        },
                        "cosmos.base.query.v1beta1.PageRequest": {
                            "properties": {
                                "key": {
                                    "type": "string",
                                    "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "offset": {
                                    "type": "string",
                                    "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                                },
                                "limit": {
                                    "type": "string",
                                    "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                                },
                                "count_total": {
                                    "type": "boolean",
                                    "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                                },
                                "reverse": {
                                    "type": "boolean",
                                    "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Request",
                            "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryPoolsRequest",
                        "definitions": {
                            "QueryPoolsRequest": {
                                "properties": {
                                    "pagination": {
                                        "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                        "additionalProperties": true,
                                        "description": "pagination defines an optional pagination for the request."
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Pools Request",
                                "description": "=============================== Pools"
                            },
                            "cosmos.base.query.v1beta1.PageRequest": {
                                "properties": {
                                    "key": {
                                        "type": "string",
                                        "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                        "format": "binary",
                                        "binaryEncoding": "base64"
                                    },
                                    "offset": {
                                        "type": "string",
                                        "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                                    },
                                    "limit": {
                                        "type": "string",
                                        "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                                    },
                                    "count_total": {
                                        "type": "boolean",
                                        "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                                    },
                                    "reverse": {
                                        "type": "boolean",
                                        "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Page Request",
                                "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                            }
                        }
                    }
                },
                "QueryPoolsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryPoolsResponse",
                    "definitions": {
                        "QueryPoolsResponse": {
                            "properties": {
                                "pools": {
                                    "items": {
                                        "properties": {
                                            "type_url": {
                                                "type": "string",
                                                "description": "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics."
                                            },
                                            "value": {
                                                "type": "string",
                                                "description": "Must be a valid serialized protocol buffer of the above specified type.",
                                                "format": "binary",
                                                "binaryEncoding": "base64"
                                            }
                                        },
                                        "additionalProperties": true,
                                        "type": "object",
                                        "title": "Any",
                                        "description": "`Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++.     Foo foo = ...;     Any any;     any.PackFrom(foo);     ...     if (any.UnpackTo(&foo)) {       ...     } Example 2: Pack and unpack a message in Java.     Foo foo = ...;     Any any = Any.pack(foo);     ...     if (any.is(Foo.class)) {       foo = any.unpack(Foo.class);     }  Example 3: Pack and unpack a message in Python.     foo = Foo(...)     any = Any()     any.Pack(foo)     ...     if any.Is(Foo.DESCRIPTOR):       any.Unpack(foo)       ...  Example 4: Pack and unpack a message in Go      foo := &pb.Foo{...}      any, err := ptypes.MarshalAny(foo)      ...      foo := &pb.Foo{}      if err := ptypes.UnmarshalAny(any, foo); err != nil {        ...      } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example \"foo.bar.com/x/y.z\" will yield type name \"y.z\". JSON ==== The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example:     package google.profile;     message Person {       string first_name = 1;       string last_name = 2;     }     {       \"@type\": \"type.googleapis.com/google.profile.Person\",       \"firstName\": <string>,       \"lastName\": <string>     } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message [google.protobuf.Duration][]):     {       \"@type\": \"type.googleapis.com/google.protobuf.Duration\",       \"value\": \"1.212s\"     }"
                                    },
                                    "type": "array"
                                },
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                    "additionalProperties": true,
                                    "description": "pagination defines the pagination in the response."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Pools Response"
                        },
                        "cosmos.base.query.v1beta1.PageResponse": {
                            "properties": {
                                "next_key": {
                                    "type": "string",
                                    "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "total": {
                                    "type": "string",
                                    "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Response",
                            "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryPoolsResponse",
                        "definitions": {
                            "QueryPoolsResponse": {
                                "properties": {
                                    "pools": {
                                        "items": {
                                            "properties": {
                                                "type_url": {
                                                    "type": "string",
                                                    "description": "A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics."
                                                },
                                                "value": {
                                                    "type": "string",
                                                    "description": "Must be a valid serialized protocol buffer of the above specified type.",
                                                    "format": "binary",
                                                    "binaryEncoding": "base64"
                                                }
                                            },
                                            "additionalProperties": true,
                                            "type": "object",
                                            "title": "Any",
                                            "description": "`Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++.     Foo foo = ...;     Any any;     any.PackFrom(foo);     ...     if (any.UnpackTo(&foo)) {       ...     } Example 2: Pack and unpack a message in Java.     Foo foo = ...;     Any any = Any.pack(foo);     ...     if (any.is(Foo.class)) {       foo = any.unpack(Foo.class);     }  Example 3: Pack and unpack a message in Python.     foo = Foo(...)     any = Any()     any.Pack(foo)     ...     if any.Is(Foo.DESCRIPTOR):       any.Unpack(foo)       ...  Example 4: Pack and unpack a message in Go      foo := &pb.Foo{...}      any, err := ptypes.MarshalAny(foo)      ...      foo := &pb.Foo{}      if err := ptypes.UnmarshalAny(any, foo); err != nil {        ...      } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example \"foo.bar.com/x/y.z\" will yield type name \"y.z\". JSON ==== The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example:     package google.profile;     message Person {       string first_name = 1;       string last_name = 2;     }     {       \"@type\": \"type.googleapis.com/google.profile.Person\",       \"firstName\": <string>,       \"lastName\": <string>     } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message [google.protobuf.Duration][]):     {       \"@type\": \"type.googleapis.com/google.protobuf.Duration\",       \"value\": \"1.212s\"     }"
                                        },
                                        "type": "array"
                                    },
                                    "pagination": {
                                        "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                        "additionalProperties": true,
                                        "description": "pagination defines the pagination in the response."
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Pools Response"
                            },
                            "cosmos.base.query.v1beta1.PageResponse": {
                                "properties": {
                                    "next_key": {
                                        "type": "string",
                                        "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                        "format": "binary",
                                        "binaryEncoding": "base64"
                                    },
                                    "total": {
                                        "type": "string",
                                        "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Page Response",
                                "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                            }
                        }
                    }
                },
                "QuerySpotPriceRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QuerySpotPriceRequest",
                    "definitions": {
                        "QuerySpotPriceRequest": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                },
                                "base_asset_denom": {
                                    "type": "string"
                                },
                                "quote_asset_denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Spot Price Request",
                            "description": "QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice query."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QuerySpotPriceRequest",
                        "definitions": {
                            "QuerySpotPriceRequest": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "base_asset_denom": {
                                        "type": "string"
                                    },
                                    "quote_asset_denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Spot Price Request",
                                "description": "QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice query."
                            }
                        }
                    }
                },
                "QuerySpotPriceResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QuerySpotPriceResponse",
                    "definitions": {
                        "QuerySpotPriceResponse": {
                            "properties": {
                                "spot_price": {
                                    "type": "string",
                                    "description": "String of the Dec. Ex) 10.203uatom"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Spot Price Response",
                            "description": "QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice query."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QuerySpotPriceResponse",
                        "definitions": {
                            "QuerySpotPriceResponse": {
                                "properties": {
                                    "spot_price": {
                                        "type": "string",
                                        "description": "String of the Dec. Ex) 10.203uatom"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Spot Price Response",
                                "description": "QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice query."
                            }
                        }
                    }
                },
                "QuerySwapExactAmountInRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QuerySwapExactAmountInRequest",
                    "definitions": {
                        "QuerySwapExactAmountInRequest": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_in": {
                                    "type": "string"
                                },
                                "routes": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.gamm.v1beta1.SwapAmountInRoute"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Swap Exact Amount In Request",
                            "description": "=============================== EstimateSwapExactAmountIn"
                        },
                        "osmosis.gamm.v1beta1.SwapAmountInRoute": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_out_denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Swap Amount In Route",
                            "description": "===================== MsgSwapExactAmountIn"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QuerySwapExactAmountInRequest",
                        "definitions": {
                            "QuerySwapExactAmountInRequest": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_in": {
                                        "type": "string"
                                    },
                                    "routes": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.gamm.v1beta1.SwapAmountInRoute"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Swap Exact Amount In Request",
                                "description": "=============================== EstimateSwapExactAmountIn"
                            },
                            "osmosis.gamm.v1beta1.SwapAmountInRoute": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_out_denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Swap Amount In Route",
                                "description": "===================== MsgSwapExactAmountIn"
                            }
                        }
                    }
                },
                "QuerySwapExactAmountInResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QuerySwapExactAmountInResponse",
                    "definitions": {
                        "QuerySwapExactAmountInResponse": {
                            "properties": {
                                "token_out_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Swap Exact Amount In Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QuerySwapExactAmountInResponse",
                        "definitions": {
                            "QuerySwapExactAmountInResponse": {
                                "properties": {
                                    "token_out_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Swap Exact Amount In Response"
                            }
                        }
                    }
                },
                "QuerySwapExactAmountOutRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QuerySwapExactAmountOutRequest",
                    "definitions": {
                        "QuerySwapExactAmountOutRequest": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "pool_id": {
                                    "type": "string"
                                },
                                "routes": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.gamm.v1beta1.SwapAmountOutRoute"
                                    },
                                    "type": "array"
                                },
                                "token_out": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Swap Exact Amount Out Request",
                            "description": "=============================== EstimateSwapExactAmountOut"
                        },
                        "osmosis.gamm.v1beta1.SwapAmountOutRoute": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_in_denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Swap Amount Out Route",
                            "description": "===================== MsgSwapExactAmountOut"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QuerySwapExactAmountOutRequest",
                        "definitions": {
                            "QuerySwapExactAmountOutRequest": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "routes": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.gamm.v1beta1.SwapAmountOutRoute"
                                        },
                                        "type": "array"
                                    },
                                    "token_out": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Swap Exact Amount Out Request",
                                "description": "=============================== EstimateSwapExactAmountOut"
                            },
                            "osmosis.gamm.v1beta1.SwapAmountOutRoute": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_in_denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Swap Amount Out Route",
                                "description": "===================== MsgSwapExactAmountOut"
                            }
                        }
                    }
                },
                "QuerySwapExactAmountOutResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QuerySwapExactAmountOutResponse",
                    "definitions": {
                        "QuerySwapExactAmountOutResponse": {
                            "properties": {
                                "token_in_amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Swap Exact Amount Out Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QuerySwapExactAmountOutResponse",
                        "definitions": {
                            "QuerySwapExactAmountOutResponse": {
                                "properties": {
                                    "token_in_amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Swap Exact Amount Out Response"
                            }
                        }
                    }
                },
                "QueryTotalLiquidityRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryTotalLiquidityRequest",
                    "definitions": {
                        "QueryTotalLiquidityRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Total Liquidity Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryTotalLiquidityRequest",
                        "definitions": {
                            "QueryTotalLiquidityRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Total Liquidity Request"
                            }
                        }
                    }
                },
                "QueryTotalLiquidityResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryTotalLiquidityResponse",
                    "definitions": {
                        "QueryTotalLiquidityResponse": {
                            "properties": {
                                "liquidity": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Total Liquidity Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryTotalLiquidityResponse",
                        "definitions": {
                            "QueryTotalLiquidityResponse": {
                                "properties": {
                                    "liquidity": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Total Liquidity Response"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "QueryTotalPoolLiquidityRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryTotalPoolLiquidityRequest",
                    "definitions": {
                        "QueryTotalPoolLiquidityRequest": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Total Pool Liquidity Request",
                            "description": "=============================== PoolLiquidity"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryTotalPoolLiquidityRequest",
                        "definitions": {
                            "QueryTotalPoolLiquidityRequest": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Total Pool Liquidity Request",
                                "description": "=============================== PoolLiquidity"
                            }
                        }
                    }
                },
                "QueryTotalPoolLiquidityResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryTotalPoolLiquidityResponse",
                    "definitions": {
                        "QueryTotalPoolLiquidityResponse": {
                            "properties": {
                                "liquidity": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Total Pool Liquidity Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryTotalPoolLiquidityResponse",
                        "definitions": {
                            "QueryTotalPoolLiquidityResponse": {
                                "properties": {
                                    "liquidity": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Total Pool Liquidity Response"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "QueryTotalSharesRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryTotalSharesRequest",
                    "definitions": {
                        "QueryTotalSharesRequest": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Total Shares Request",
                            "description": "=============================== TotalShares"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryTotalSharesRequest",
                        "definitions": {
                            "QueryTotalSharesRequest": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Total Shares Request",
                                "description": "=============================== TotalShares"
                            }
                        }
                    }
                },
                "QueryTotalSharesResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryTotalSharesResponse",
                    "definitions": {
                        "QueryTotalSharesResponse": {
                            "properties": {
                                "total_shares": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Total Shares Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryTotalSharesResponse",
                        "definitions": {
                            "QueryTotalSharesResponse": {
                                "properties": {
                                    "total_shares": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                        "additionalProperties": true
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Total Shares Response"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "SwapAmountInRoute": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SwapAmountInRoute",
                    "definitions": {
                        "SwapAmountInRoute": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_out_denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Swap Amount In Route",
                            "description": "===================== MsgSwapExactAmountIn"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/SwapAmountInRoute",
                        "definitions": {
                            "SwapAmountInRoute": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_out_denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Swap Amount In Route",
                                "description": "===================== MsgSwapExactAmountIn"
                            }
                        }
                    }
                },
                "SwapAmountOutRoute": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SwapAmountOutRoute",
                    "definitions": {
                        "SwapAmountOutRoute": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                },
                                "token_in_denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Swap Amount Out Route",
                            "description": "===================== MsgSwapExactAmountOut"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/SwapAmountOutRoute",
                        "definitions": {
                            "SwapAmountOutRoute": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "token_in_denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Swap Amount Out Route",
                                "description": "===================== MsgSwapExactAmountOut"
                            }
                        }
                    }
                }
            }
        },
        "incentives": {
            "ActiveGaugesPerDenomRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ActiveGaugesPerDenomRequest",
                "definitions": {
                    "ActiveGaugesPerDenomRequest": {
                        "properties": {
                            "denom": {
                                "type": "string",
                                "description": "Desired denom when querying active gagues"
                            },
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the request"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Active Gauges Per Denom Request"
                    },
                    "cosmos.base.query.v1beta1.PageRequest": {
                        "properties": {
                            "key": {
                                "type": "string",
                                "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "offset": {
                                "type": "string",
                                "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                            },
                            "limit": {
                                "type": "string",
                                "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                            },
                            "count_total": {
                                "type": "boolean",
                                "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                            },
                            "reverse": {
                                "type": "boolean",
                                "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Request",
                        "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ActiveGaugesPerDenomRequest",
                    "definitions": {
                        "ActiveGaugesPerDenomRequest": {
                            "properties": {
                                "denom": {
                                    "type": "string",
                                    "description": "Desired denom when querying active gagues"
                                },
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the request"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Active Gauges Per Denom Request"
                        },
                        "cosmos.base.query.v1beta1.PageRequest": {
                            "properties": {
                                "key": {
                                    "type": "string",
                                    "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "offset": {
                                    "type": "string",
                                    "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                                },
                                "limit": {
                                    "type": "string",
                                    "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                                },
                                "count_total": {
                                    "type": "boolean",
                                    "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                                },
                                "reverse": {
                                    "type": "boolean",
                                    "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Request",
                            "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                        }
                    }
                }
            },
            "ActiveGaugesPerDenomResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ActiveGaugesPerDenomResponse",
                "definitions": {
                    "ActiveGaugesPerDenomResponse": {
                        "properties": {
                            "data": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.incentives.Gauge"
                                },
                                "type": "array",
                                "description": "Active gagues that match denom in query"
                            },
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the response"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Active Gauges Per Denom Response"
                    },
                    "cosmos.base.query.v1beta1.PageResponse": {
                        "properties": {
                            "next_key": {
                                "type": "string",
                                "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "total": {
                                "type": "string",
                                "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Response",
                        "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.incentives.Gauge": {
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "id is the unique ID of a Gauge"
                            },
                            "is_perpetual": {
                                "type": "boolean",
                                "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                            },
                            "distribute_to": {
                                "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                "additionalProperties": true,
                                "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                            },
                            "start_time": {
                                "type": "string",
                                "description": "start_time is the distribution start time",
                                "format": "date-time"
                            },
                            "num_epochs_paid_over": {
                                "type": "string",
                                "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                            },
                            "filled_epochs": {
                                "type": "string",
                                "description": "filled_epochs is the number of epochs distribution has been completed on already"
                            },
                            "distributed_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "distributed_coins are coins that have been distributed already"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauge",
                        "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                    },
                    "osmosis.lockup.QueryCondition": {
                        "properties": {
                            "lock_query_type": {
                                "enum": [
                                    "ByDuration",
                                    0,
                                    "ByTime",
                                    1
                                ],
                                "oneOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ],
                                "title": "Lock Query Type",
                                "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                            },
                            "denom": {
                                "type": "string",
                                "description": "Denom represents the token denomination we are looking to lock up"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                "format": "regex"
                            },
                            "timestamp": {
                                "type": "string",
                                "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Condition",
                        "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ActiveGaugesPerDenomResponse",
                    "definitions": {
                        "ActiveGaugesPerDenomResponse": {
                            "properties": {
                                "data": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.incentives.Gauge"
                                    },
                                    "type": "array",
                                    "description": "Active gagues that match denom in query"
                                },
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the response"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Active Gauges Per Denom Response"
                        },
                        "cosmos.base.query.v1beta1.PageResponse": {
                            "properties": {
                                "next_key": {
                                    "type": "string",
                                    "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "total": {
                                    "type": "string",
                                    "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Response",
                            "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.incentives.Gauge": {
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "id is the unique ID of a Gauge"
                                },
                                "is_perpetual": {
                                    "type": "boolean",
                                    "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                                },
                                "distribute_to": {
                                    "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                    "additionalProperties": true,
                                    "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                                },
                                "start_time": {
                                    "type": "string",
                                    "description": "start_time is the distribution start time",
                                    "format": "date-time"
                                },
                                "num_epochs_paid_over": {
                                    "type": "string",
                                    "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                                },
                                "filled_epochs": {
                                    "type": "string",
                                    "description": "filled_epochs is the number of epochs distribution has been completed on already"
                                },
                                "distributed_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "distributed_coins are coins that have been distributed already"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge",
                            "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                        },
                        "osmosis.lockup.QueryCondition": {
                            "properties": {
                                "lock_query_type": {
                                    "enum": [
                                        "ByDuration",
                                        0,
                                        "ByTime",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Lock Query Type",
                                    "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                                },
                                "denom": {
                                    "type": "string",
                                    "description": "Denom represents the token denomination we are looking to lock up"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                    "format": "regex"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Condition",
                            "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                        }
                    }
                }
            },
            "ActiveGaugesRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ActiveGaugesRequest",
                "definitions": {
                    "ActiveGaugesRequest": {
                        "properties": {
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the request"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Active Gauges Request"
                    },
                    "cosmos.base.query.v1beta1.PageRequest": {
                        "properties": {
                            "key": {
                                "type": "string",
                                "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "offset": {
                                "type": "string",
                                "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                            },
                            "limit": {
                                "type": "string",
                                "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                            },
                            "count_total": {
                                "type": "boolean",
                                "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                            },
                            "reverse": {
                                "type": "boolean",
                                "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Request",
                        "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ActiveGaugesRequest",
                    "definitions": {
                        "ActiveGaugesRequest": {
                            "properties": {
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the request"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Active Gauges Request"
                        },
                        "cosmos.base.query.v1beta1.PageRequest": {
                            "properties": {
                                "key": {
                                    "type": "string",
                                    "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "offset": {
                                    "type": "string",
                                    "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                                },
                                "limit": {
                                    "type": "string",
                                    "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                                },
                                "count_total": {
                                    "type": "boolean",
                                    "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                                },
                                "reverse": {
                                    "type": "boolean",
                                    "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Request",
                            "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                        }
                    }
                }
            },
            "ActiveGaugesResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ActiveGaugesResponse",
                "definitions": {
                    "ActiveGaugesResponse": {
                        "properties": {
                            "data": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.incentives.Gauge"
                                },
                                "type": "array",
                                "description": "Active gagues only"
                            },
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the response"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Active Gauges Response"
                    },
                    "cosmos.base.query.v1beta1.PageResponse": {
                        "properties": {
                            "next_key": {
                                "type": "string",
                                "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "total": {
                                "type": "string",
                                "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Response",
                        "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.incentives.Gauge": {
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "id is the unique ID of a Gauge"
                            },
                            "is_perpetual": {
                                "type": "boolean",
                                "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                            },
                            "distribute_to": {
                                "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                "additionalProperties": true,
                                "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                            },
                            "start_time": {
                                "type": "string",
                                "description": "start_time is the distribution start time",
                                "format": "date-time"
                            },
                            "num_epochs_paid_over": {
                                "type": "string",
                                "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                            },
                            "filled_epochs": {
                                "type": "string",
                                "description": "filled_epochs is the number of epochs distribution has been completed on already"
                            },
                            "distributed_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "distributed_coins are coins that have been distributed already"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauge",
                        "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                    },
                    "osmosis.lockup.QueryCondition": {
                        "properties": {
                            "lock_query_type": {
                                "enum": [
                                    "ByDuration",
                                    0,
                                    "ByTime",
                                    1
                                ],
                                "oneOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ],
                                "title": "Lock Query Type",
                                "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                            },
                            "denom": {
                                "type": "string",
                                "description": "Denom represents the token denomination we are looking to lock up"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                "format": "regex"
                            },
                            "timestamp": {
                                "type": "string",
                                "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Condition",
                        "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ActiveGaugesResponse",
                    "definitions": {
                        "ActiveGaugesResponse": {
                            "properties": {
                                "data": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.incentives.Gauge"
                                    },
                                    "type": "array",
                                    "description": "Active gagues only"
                                },
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the response"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Active Gauges Response"
                        },
                        "cosmos.base.query.v1beta1.PageResponse": {
                            "properties": {
                                "next_key": {
                                    "type": "string",
                                    "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "total": {
                                    "type": "string",
                                    "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Response",
                            "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.incentives.Gauge": {
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "id is the unique ID of a Gauge"
                                },
                                "is_perpetual": {
                                    "type": "boolean",
                                    "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                                },
                                "distribute_to": {
                                    "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                    "additionalProperties": true,
                                    "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                                },
                                "start_time": {
                                    "type": "string",
                                    "description": "start_time is the distribution start time",
                                    "format": "date-time"
                                },
                                "num_epochs_paid_over": {
                                    "type": "string",
                                    "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                                },
                                "filled_epochs": {
                                    "type": "string",
                                    "description": "filled_epochs is the number of epochs distribution has been completed on already"
                                },
                                "distributed_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "distributed_coins are coins that have been distributed already"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge",
                            "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                        },
                        "osmosis.lockup.QueryCondition": {
                            "properties": {
                                "lock_query_type": {
                                    "enum": [
                                        "ByDuration",
                                        0,
                                        "ByTime",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Lock Query Type",
                                    "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                                },
                                "denom": {
                                    "type": "string",
                                    "description": "Denom represents the token denomination we are looking to lock up"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                    "format": "regex"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Condition",
                            "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                        }
                    }
                }
            },
            "GaugeByIDRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/GaugeByIDRequest",
                "definitions": {
                    "GaugeByIDRequest": {
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "Gague ID being queried"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauge By ID Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/GaugeByIDRequest",
                    "definitions": {
                        "GaugeByIDRequest": {
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "Gague ID being queried"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge By ID Request"
                        }
                    }
                }
            },
            "GaugeByIDResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/GaugeByIDResponse",
                "definitions": {
                    "GaugeByIDResponse": {
                        "properties": {
                            "gauge": {
                                "$ref": "#/definitions/osmosis.incentives.Gauge",
                                "additionalProperties": true,
                                "description": "Gauge that corresponds to provided gague ID"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauge By ID Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.incentives.Gauge": {
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "id is the unique ID of a Gauge"
                            },
                            "is_perpetual": {
                                "type": "boolean",
                                "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                            },
                            "distribute_to": {
                                "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                "additionalProperties": true,
                                "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                            },
                            "start_time": {
                                "type": "string",
                                "description": "start_time is the distribution start time",
                                "format": "date-time"
                            },
                            "num_epochs_paid_over": {
                                "type": "string",
                                "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                            },
                            "filled_epochs": {
                                "type": "string",
                                "description": "filled_epochs is the number of epochs distribution has been completed on already"
                            },
                            "distributed_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "distributed_coins are coins that have been distributed already"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauge",
                        "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                    },
                    "osmosis.lockup.QueryCondition": {
                        "properties": {
                            "lock_query_type": {
                                "enum": [
                                    "ByDuration",
                                    0,
                                    "ByTime",
                                    1
                                ],
                                "oneOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ],
                                "title": "Lock Query Type",
                                "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                            },
                            "denom": {
                                "type": "string",
                                "description": "Denom represents the token denomination we are looking to lock up"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                "format": "regex"
                            },
                            "timestamp": {
                                "type": "string",
                                "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Condition",
                        "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/GaugeByIDResponse",
                    "definitions": {
                        "GaugeByIDResponse": {
                            "properties": {
                                "gauge": {
                                    "$ref": "#/definitions/osmosis.incentives.Gauge",
                                    "additionalProperties": true,
                                    "description": "Gauge that corresponds to provided gague ID"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge By ID Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.incentives.Gauge": {
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "id is the unique ID of a Gauge"
                                },
                                "is_perpetual": {
                                    "type": "boolean",
                                    "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                                },
                                "distribute_to": {
                                    "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                    "additionalProperties": true,
                                    "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                                },
                                "start_time": {
                                    "type": "string",
                                    "description": "start_time is the distribution start time",
                                    "format": "date-time"
                                },
                                "num_epochs_paid_over": {
                                    "type": "string",
                                    "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                                },
                                "filled_epochs": {
                                    "type": "string",
                                    "description": "filled_epochs is the number of epochs distribution has been completed on already"
                                },
                                "distributed_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "distributed_coins are coins that have been distributed already"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge",
                            "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                        },
                        "osmosis.lockup.QueryCondition": {
                            "properties": {
                                "lock_query_type": {
                                    "enum": [
                                        "ByDuration",
                                        0,
                                        "ByTime",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Lock Query Type",
                                    "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                                },
                                "denom": {
                                    "type": "string",
                                    "description": "Denom represents the token denomination we are looking to lock up"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                    "format": "regex"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Condition",
                            "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                        }
                    }
                }
            },
            "GaugesRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/GaugesRequest",
                "definitions": {
                    "GaugesRequest": {
                        "properties": {
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the request"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauges Request"
                    },
                    "cosmos.base.query.v1beta1.PageRequest": {
                        "properties": {
                            "key": {
                                "type": "string",
                                "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "offset": {
                                "type": "string",
                                "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                            },
                            "limit": {
                                "type": "string",
                                "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                            },
                            "count_total": {
                                "type": "boolean",
                                "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                            },
                            "reverse": {
                                "type": "boolean",
                                "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Request",
                        "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/GaugesRequest",
                    "definitions": {
                        "GaugesRequest": {
                            "properties": {
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the request"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauges Request"
                        },
                        "cosmos.base.query.v1beta1.PageRequest": {
                            "properties": {
                                "key": {
                                    "type": "string",
                                    "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "offset": {
                                    "type": "string",
                                    "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                                },
                                "limit": {
                                    "type": "string",
                                    "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                                },
                                "count_total": {
                                    "type": "boolean",
                                    "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                                },
                                "reverse": {
                                    "type": "boolean",
                                    "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Request",
                            "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                        }
                    }
                }
            },
            "GaugesResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/GaugesResponse",
                "definitions": {
                    "GaugesResponse": {
                        "properties": {
                            "data": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.incentives.Gauge"
                                },
                                "type": "array",
                                "description": "Upcoming and active gauges"
                            },
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the response"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauges Response"
                    },
                    "cosmos.base.query.v1beta1.PageResponse": {
                        "properties": {
                            "next_key": {
                                "type": "string",
                                "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "total": {
                                "type": "string",
                                "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Response",
                        "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.incentives.Gauge": {
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "id is the unique ID of a Gauge"
                            },
                            "is_perpetual": {
                                "type": "boolean",
                                "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                            },
                            "distribute_to": {
                                "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                "additionalProperties": true,
                                "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                            },
                            "start_time": {
                                "type": "string",
                                "description": "start_time is the distribution start time",
                                "format": "date-time"
                            },
                            "num_epochs_paid_over": {
                                "type": "string",
                                "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                            },
                            "filled_epochs": {
                                "type": "string",
                                "description": "filled_epochs is the number of epochs distribution has been completed on already"
                            },
                            "distributed_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "distributed_coins are coins that have been distributed already"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauge",
                        "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                    },
                    "osmosis.lockup.QueryCondition": {
                        "properties": {
                            "lock_query_type": {
                                "enum": [
                                    "ByDuration",
                                    0,
                                    "ByTime",
                                    1
                                ],
                                "oneOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ],
                                "title": "Lock Query Type",
                                "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                            },
                            "denom": {
                                "type": "string",
                                "description": "Denom represents the token denomination we are looking to lock up"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                "format": "regex"
                            },
                            "timestamp": {
                                "type": "string",
                                "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Condition",
                        "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/GaugesResponse",
                    "definitions": {
                        "GaugesResponse": {
                            "properties": {
                                "data": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.incentives.Gauge"
                                    },
                                    "type": "array",
                                    "description": "Upcoming and active gauges"
                                },
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the response"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauges Response"
                        },
                        "cosmos.base.query.v1beta1.PageResponse": {
                            "properties": {
                                "next_key": {
                                    "type": "string",
                                    "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "total": {
                                    "type": "string",
                                    "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Response",
                            "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.incentives.Gauge": {
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "id is the unique ID of a Gauge"
                                },
                                "is_perpetual": {
                                    "type": "boolean",
                                    "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                                },
                                "distribute_to": {
                                    "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                    "additionalProperties": true,
                                    "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                                },
                                "start_time": {
                                    "type": "string",
                                    "description": "start_time is the distribution start time",
                                    "format": "date-time"
                                },
                                "num_epochs_paid_over": {
                                    "type": "string",
                                    "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                                },
                                "filled_epochs": {
                                    "type": "string",
                                    "description": "filled_epochs is the number of epochs distribution has been completed on already"
                                },
                                "distributed_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "distributed_coins are coins that have been distributed already"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge",
                            "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                        },
                        "osmosis.lockup.QueryCondition": {
                            "properties": {
                                "lock_query_type": {
                                    "enum": [
                                        "ByDuration",
                                        0,
                                        "ByTime",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Lock Query Type",
                                    "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                                },
                                "denom": {
                                    "type": "string",
                                    "description": "Denom represents the token denomination we are looking to lock up"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                    "format": "regex"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Condition",
                            "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                        }
                    }
                }
            },
            "ModuleDistributedCoinsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ModuleDistributedCoinsRequest",
                "definitions": {
                    "ModuleDistributedCoinsRequest": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Module Distributed Coins Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ModuleDistributedCoinsRequest",
                    "definitions": {
                        "ModuleDistributedCoinsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Module Distributed Coins Request"
                        }
                    }
                }
            },
            "ModuleDistributedCoinsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ModuleDistributedCoinsResponse",
                "definitions": {
                    "ModuleDistributedCoinsResponse": {
                        "properties": {
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins that have been distributed already"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Module Distributed Coins Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ModuleDistributedCoinsResponse",
                    "definitions": {
                        "ModuleDistributedCoinsResponse": {
                            "properties": {
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins that have been distributed already"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Module Distributed Coins Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "ModuleToDistributeCoinsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ModuleToDistributeCoinsRequest",
                "definitions": {
                    "ModuleToDistributeCoinsRequest": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Module To Distribute Coins Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ModuleToDistributeCoinsRequest",
                    "definitions": {
                        "ModuleToDistributeCoinsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Module To Distribute Coins Request"
                        }
                    }
                }
            },
            "ModuleToDistributeCoinsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ModuleToDistributeCoinsResponse",
                "definitions": {
                    "ModuleToDistributeCoinsResponse": {
                        "properties": {
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins that have yet to be distributed"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Module To Distribute Coins Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ModuleToDistributeCoinsResponse",
                    "definitions": {
                        "ModuleToDistributeCoinsResponse": {
                            "properties": {
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins that have yet to be distributed"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Module To Distribute Coins Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "MsgAddToGauge": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgAddToGauge",
                "definitions": {
                    "MsgAddToGauge": {
                        "properties": {
                            "owner": {
                                "type": "string",
                                "description": "owner is the gauge owner's address"
                            },
                            "gauge_id": {
                                "type": "string",
                                "description": "gauge_id is the ID of gauge that rewards are getting added to"
                            },
                            "rewards": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "rewards are the coin(s) to add to gauge"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Add To Gauge",
                        "description": "MsgAddToGauge adds coins to a previously created gauge"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgAddToGauge",
                    "definitions": {
                        "MsgAddToGauge": {
                            "properties": {
                                "owner": {
                                    "type": "string",
                                    "description": "owner is the gauge owner's address"
                                },
                                "gauge_id": {
                                    "type": "string",
                                    "description": "gauge_id is the ID of gauge that rewards are getting added to"
                                },
                                "rewards": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "rewards are the coin(s) to add to gauge"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Add To Gauge",
                            "description": "MsgAddToGauge adds coins to a previously created gauge"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "MsgAddToGaugeResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgAddToGaugeResponse",
                "definitions": {
                    "MsgAddToGaugeResponse": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Add To Gauge Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgAddToGaugeResponse",
                    "definitions": {
                        "MsgAddToGaugeResponse": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Add To Gauge Response"
                        }
                    }
                }
            },
            "MsgCreateGauge": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgCreateGauge",
                "definitions": {
                    "MsgCreateGauge": {
                        "properties": {
                            "is_perpetual": {
                                "type": "boolean",
                                "description": "is_perpetual shows if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled"
                            },
                            "owner": {
                                "type": "string",
                                "description": "owner is the address of gauge creator"
                            },
                            "distribute_to": {
                                "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                "additionalProperties": true,
                                "description": "distribute_to show which lock the gauge should distribute to by time duration or by timestamp"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "coins are coin(s) to be distributed by the gauge"
                            },
                            "start_time": {
                                "type": "string",
                                "description": "start_time is the distribution start time",
                                "format": "date-time"
                            },
                            "num_epochs_paid_over": {
                                "type": "string",
                                "description": "num_epochs_paid_over is the number of epochs distribution will be completed over"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Create Gauge",
                        "description": "MsgCreateGauge creates a gague to distribute rewards to users"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.QueryCondition": {
                        "properties": {
                            "lock_query_type": {
                                "enum": [
                                    "ByDuration",
                                    0,
                                    "ByTime",
                                    1
                                ],
                                "oneOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ],
                                "title": "Lock Query Type",
                                "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                            },
                            "denom": {
                                "type": "string",
                                "description": "Denom represents the token denomination we are looking to lock up"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                "format": "regex"
                            },
                            "timestamp": {
                                "type": "string",
                                "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Condition",
                        "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgCreateGauge",
                    "definitions": {
                        "MsgCreateGauge": {
                            "properties": {
                                "is_perpetual": {
                                    "type": "boolean",
                                    "description": "is_perpetual shows if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled"
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "owner is the address of gauge creator"
                                },
                                "distribute_to": {
                                    "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                    "additionalProperties": true,
                                    "description": "distribute_to show which lock the gauge should distribute to by time duration or by timestamp"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "coins are coin(s) to be distributed by the gauge"
                                },
                                "start_time": {
                                    "type": "string",
                                    "description": "start_time is the distribution start time",
                                    "format": "date-time"
                                },
                                "num_epochs_paid_over": {
                                    "type": "string",
                                    "description": "num_epochs_paid_over is the number of epochs distribution will be completed over"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Create Gauge",
                            "description": "MsgCreateGauge creates a gague to distribute rewards to users"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.QueryCondition": {
                            "properties": {
                                "lock_query_type": {
                                    "enum": [
                                        "ByDuration",
                                        0,
                                        "ByTime",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Lock Query Type",
                                    "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                                },
                                "denom": {
                                    "type": "string",
                                    "description": "Denom represents the token denomination we are looking to lock up"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                    "format": "regex"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Condition",
                            "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                        }
                    }
                }
            },
            "MsgCreateGaugeResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgCreateGaugeResponse",
                "definitions": {
                    "MsgCreateGaugeResponse": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Create Gauge Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgCreateGaugeResponse",
                    "definitions": {
                        "MsgCreateGaugeResponse": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Create Gauge Response"
                        }
                    }
                }
            },
            "QueryLockableDurationsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryLockableDurationsRequest",
                "definitions": {
                    "QueryLockableDurationsRequest": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Lockable Durations Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryLockableDurationsRequest",
                    "definitions": {
                        "QueryLockableDurationsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Lockable Durations Request"
                        }
                    }
                }
            },
            "QueryLockableDurationsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryLockableDurationsResponse",
                "definitions": {
                    "QueryLockableDurationsResponse": {
                        "properties": {
                            "lockable_durations": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "items": {
                                    "type": "string"
                                },
                                "type": "array",
                                "description": "Time durations that users can lock coins for in order to recieve rewards",
                                "format": "regex"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Lockable Durations Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryLockableDurationsResponse",
                    "definitions": {
                        "QueryLockableDurationsResponse": {
                            "properties": {
                                "lockable_durations": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "items": {
                                        "type": "string"
                                    },
                                    "type": "array",
                                    "description": "Time durations that users can lock coins for in order to recieve rewards",
                                    "format": "regex"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Lockable Durations Response"
                        }
                    }
                }
            },
            "RewardsEstRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/RewardsEstRequest",
                "definitions": {
                    "RewardsEstRequest": {
                        "properties": {
                            "owner": {
                                "type": "string",
                                "description": "Address that is being queried for future estimated rewards"
                            },
                            "lock_ids": {
                                "items": {
                                    "type": "string"
                                },
                                "type": "array",
                                "description": "Lock IDs included in future reward estimation"
                            },
                            "end_epoch": {
                                "type": "string",
                                "description": "Upper time limit of reward estimation Lower limit is current epoch"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Rewards Est Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/RewardsEstRequest",
                    "definitions": {
                        "RewardsEstRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string",
                                    "description": "Address that is being queried for future estimated rewards"
                                },
                                "lock_ids": {
                                    "items": {
                                        "type": "string"
                                    },
                                    "type": "array",
                                    "description": "Lock IDs included in future reward estimation"
                                },
                                "end_epoch": {
                                    "type": "string",
                                    "description": "Upper time limit of reward estimation Lower limit is current epoch"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Rewards Est Request"
                        }
                    }
                }
            },
            "RewardsEstResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/RewardsEstResponse",
                "definitions": {
                    "RewardsEstResponse": {
                        "properties": {
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Estimated coin rewards that will be recieved at provided address from specified locks between current time and end epoch"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Rewards Est Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/RewardsEstResponse",
                    "definitions": {
                        "RewardsEstResponse": {
                            "properties": {
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Estimated coin rewards that will be recieved at provided address from specified locks between current time and end epoch"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Rewards Est Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "UpcomingGaugesPerDenomRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/UpcomingGaugesPerDenomRequest",
                "definitions": {
                    "UpcomingGaugesPerDenomRequest": {
                        "properties": {
                            "denom": {
                                "type": "string",
                                "description": "Filter for upcoming gagues that match specific denom"
                            },
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the request"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Upcoming Gauges Per Denom Request"
                    },
                    "cosmos.base.query.v1beta1.PageRequest": {
                        "properties": {
                            "key": {
                                "type": "string",
                                "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "offset": {
                                "type": "string",
                                "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                            },
                            "limit": {
                                "type": "string",
                                "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                            },
                            "count_total": {
                                "type": "boolean",
                                "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                            },
                            "reverse": {
                                "type": "boolean",
                                "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Request",
                        "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/UpcomingGaugesPerDenomRequest",
                    "definitions": {
                        "UpcomingGaugesPerDenomRequest": {
                            "properties": {
                                "denom": {
                                    "type": "string",
                                    "description": "Filter for upcoming gagues that match specific denom"
                                },
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the request"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Upcoming Gauges Per Denom Request"
                        },
                        "cosmos.base.query.v1beta1.PageRequest": {
                            "properties": {
                                "key": {
                                    "type": "string",
                                    "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "offset": {
                                    "type": "string",
                                    "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                                },
                                "limit": {
                                    "type": "string",
                                    "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                                },
                                "count_total": {
                                    "type": "boolean",
                                    "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                                },
                                "reverse": {
                                    "type": "boolean",
                                    "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Request",
                            "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                        }
                    }
                }
            },
            "UpcomingGaugesPerDenomResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/UpcomingGaugesPerDenomResponse",
                "definitions": {
                    "UpcomingGaugesPerDenomResponse": {
                        "properties": {
                            "upcoming_gauges": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.incentives.Gauge"
                                },
                                "type": "array",
                                "description": "Upcoming gagues that match denom in query"
                            },
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the response"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Upcoming Gauges Per Denom Response"
                    },
                    "cosmos.base.query.v1beta1.PageResponse": {
                        "properties": {
                            "next_key": {
                                "type": "string",
                                "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "total": {
                                "type": "string",
                                "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Response",
                        "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.incentives.Gauge": {
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "id is the unique ID of a Gauge"
                            },
                            "is_perpetual": {
                                "type": "boolean",
                                "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                            },
                            "distribute_to": {
                                "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                "additionalProperties": true,
                                "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                            },
                            "start_time": {
                                "type": "string",
                                "description": "start_time is the distribution start time",
                                "format": "date-time"
                            },
                            "num_epochs_paid_over": {
                                "type": "string",
                                "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                            },
                            "filled_epochs": {
                                "type": "string",
                                "description": "filled_epochs is the number of epochs distribution has been completed on already"
                            },
                            "distributed_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "distributed_coins are coins that have been distributed already"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauge",
                        "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                    },
                    "osmosis.lockup.QueryCondition": {
                        "properties": {
                            "lock_query_type": {
                                "enum": [
                                    "ByDuration",
                                    0,
                                    "ByTime",
                                    1
                                ],
                                "oneOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ],
                                "title": "Lock Query Type",
                                "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                            },
                            "denom": {
                                "type": "string",
                                "description": "Denom represents the token denomination we are looking to lock up"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                "format": "regex"
                            },
                            "timestamp": {
                                "type": "string",
                                "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Condition",
                        "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/UpcomingGaugesPerDenomResponse",
                    "definitions": {
                        "UpcomingGaugesPerDenomResponse": {
                            "properties": {
                                "upcoming_gauges": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.incentives.Gauge"
                                    },
                                    "type": "array",
                                    "description": "Upcoming gagues that match denom in query"
                                },
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the response"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Upcoming Gauges Per Denom Response"
                        },
                        "cosmos.base.query.v1beta1.PageResponse": {
                            "properties": {
                                "next_key": {
                                    "type": "string",
                                    "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "total": {
                                    "type": "string",
                                    "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Response",
                            "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.incentives.Gauge": {
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "id is the unique ID of a Gauge"
                                },
                                "is_perpetual": {
                                    "type": "boolean",
                                    "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                                },
                                "distribute_to": {
                                    "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                    "additionalProperties": true,
                                    "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                                },
                                "start_time": {
                                    "type": "string",
                                    "description": "start_time is the distribution start time",
                                    "format": "date-time"
                                },
                                "num_epochs_paid_over": {
                                    "type": "string",
                                    "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                                },
                                "filled_epochs": {
                                    "type": "string",
                                    "description": "filled_epochs is the number of epochs distribution has been completed on already"
                                },
                                "distributed_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "distributed_coins are coins that have been distributed already"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge",
                            "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                        },
                        "osmosis.lockup.QueryCondition": {
                            "properties": {
                                "lock_query_type": {
                                    "enum": [
                                        "ByDuration",
                                        0,
                                        "ByTime",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Lock Query Type",
                                    "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                                },
                                "denom": {
                                    "type": "string",
                                    "description": "Denom represents the token denomination we are looking to lock up"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                    "format": "regex"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Condition",
                            "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                        }
                    }
                }
            },
            "UpcomingGaugesRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/UpcomingGaugesRequest",
                "definitions": {
                    "UpcomingGaugesRequest": {
                        "properties": {
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the request"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Upcoming Gauges Request"
                    },
                    "cosmos.base.query.v1beta1.PageRequest": {
                        "properties": {
                            "key": {
                                "type": "string",
                                "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "offset": {
                                "type": "string",
                                "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                            },
                            "limit": {
                                "type": "string",
                                "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                            },
                            "count_total": {
                                "type": "boolean",
                                "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                            },
                            "reverse": {
                                "type": "boolean",
                                "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Request",
                        "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/UpcomingGaugesRequest",
                    "definitions": {
                        "UpcomingGaugesRequest": {
                            "properties": {
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the request"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Upcoming Gauges Request"
                        },
                        "cosmos.base.query.v1beta1.PageRequest": {
                            "properties": {
                                "key": {
                                    "type": "string",
                                    "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "offset": {
                                    "type": "string",
                                    "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                                },
                                "limit": {
                                    "type": "string",
                                    "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                                },
                                "count_total": {
                                    "type": "boolean",
                                    "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                                },
                                "reverse": {
                                    "type": "boolean",
                                    "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Request",
                            "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                        }
                    }
                }
            },
            "UpcomingGaugesResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/UpcomingGaugesResponse",
                "definitions": {
                    "UpcomingGaugesResponse": {
                        "properties": {
                            "data": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.incentives.Gauge"
                                },
                                "type": "array",
                                "description": "Gauges whose distribution is upcoming"
                            },
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                "additionalProperties": true,
                                "description": "Pagination defines pagination for the response"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Upcoming Gauges Response"
                    },
                    "cosmos.base.query.v1beta1.PageResponse": {
                        "properties": {
                            "next_key": {
                                "type": "string",
                                "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "total": {
                                "type": "string",
                                "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Response",
                        "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.incentives.Gauge": {
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "id is the unique ID of a Gauge"
                            },
                            "is_perpetual": {
                                "type": "boolean",
                                "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                            },
                            "distribute_to": {
                                "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                "additionalProperties": true,
                                "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                            },
                            "start_time": {
                                "type": "string",
                                "description": "start_time is the distribution start time",
                                "format": "date-time"
                            },
                            "num_epochs_paid_over": {
                                "type": "string",
                                "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                            },
                            "filled_epochs": {
                                "type": "string",
                                "description": "filled_epochs is the number of epochs distribution has been completed on already"
                            },
                            "distributed_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "distributed_coins are coins that have been distributed already"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Gauge",
                        "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                    },
                    "osmosis.lockup.QueryCondition": {
                        "properties": {
                            "lock_query_type": {
                                "enum": [
                                    "ByDuration",
                                    0,
                                    "ByTime",
                                    1
                                ],
                                "oneOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ],
                                "title": "Lock Query Type",
                                "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                            },
                            "denom": {
                                "type": "string",
                                "description": "Denom represents the token denomination we are looking to lock up"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                "format": "regex"
                            },
                            "timestamp": {
                                "type": "string",
                                "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Condition",
                        "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/UpcomingGaugesResponse",
                    "definitions": {
                        "UpcomingGaugesResponse": {
                            "properties": {
                                "data": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.incentives.Gauge"
                                    },
                                    "type": "array",
                                    "description": "Gauges whose distribution is upcoming"
                                },
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                    "additionalProperties": true,
                                    "description": "Pagination defines pagination for the response"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Upcoming Gauges Response"
                        },
                        "cosmos.base.query.v1beta1.PageResponse": {
                            "properties": {
                                "next_key": {
                                    "type": "string",
                                    "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "total": {
                                    "type": "string",
                                    "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Response",
                            "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.incentives.Gauge": {
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "id is the unique ID of a Gauge"
                                },
                                "is_perpetual": {
                                    "type": "boolean",
                                    "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                                },
                                "distribute_to": {
                                    "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                    "additionalProperties": true,
                                    "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                                },
                                "start_time": {
                                    "type": "string",
                                    "description": "start_time is the distribution start time",
                                    "format": "date-time"
                                },
                                "num_epochs_paid_over": {
                                    "type": "string",
                                    "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                                },
                                "filled_epochs": {
                                    "type": "string",
                                    "description": "filled_epochs is the number of epochs distribution has been completed on already"
                                },
                                "distributed_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "distributed_coins are coins that have been distributed already"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge",
                            "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                        },
                        "osmosis.lockup.QueryCondition": {
                            "properties": {
                                "lock_query_type": {
                                    "enum": [
                                        "ByDuration",
                                        0,
                                        "ByTime",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Lock Query Type",
                                    "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                                },
                                "denom": {
                                    "type": "string",
                                    "description": "Denom represents the token denomination we are looking to lock up"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                    "format": "regex"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Condition",
                            "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                        }
                    }
                }
            }
        },
        "lockup": {
            "AccountLockedCoinsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedCoinsRequest",
                "definitions": {
                    "AccountLockedCoinsRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Coins Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedCoinsRequest",
                    "definitions": {
                        "AccountLockedCoinsRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Coins Request"
                        }
                    }
                }
            },
            "AccountLockedCoinsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedCoinsResponse",
                "definitions": {
                    "AccountLockedCoinsResponse": {
                        "properties": {
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Coins Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedCoinsResponse",
                    "definitions": {
                        "AccountLockedCoinsResponse": {
                            "properties": {
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Coins Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "AccountLockedDurationRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedDurationRequest",
                "definitions": {
                    "AccountLockedDurationRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "format": "regex"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Duration Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedDurationRequest",
                    "definitions": {
                        "AccountLockedDurationRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "format": "regex"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Duration Request"
                        }
                    }
                }
            },
            "AccountLockedDurationResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedDurationResponse",
                "definitions": {
                    "AccountLockedDurationResponse": {
                        "properties": {
                            "locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Duration Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedDurationResponse",
                    "definitions": {
                        "AccountLockedDurationResponse": {
                            "properties": {
                                "locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Duration Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "AccountLockedLongerDurationDenomRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedLongerDurationDenomRequest",
                "definitions": {
                    "AccountLockedLongerDurationDenomRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "format": "regex"
                            },
                            "denom": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Longer Duration Denom Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedLongerDurationDenomRequest",
                    "definitions": {
                        "AccountLockedLongerDurationDenomRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "format": "regex"
                                },
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Longer Duration Denom Request"
                        }
                    }
                }
            },
            "AccountLockedLongerDurationDenomResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedLongerDurationDenomResponse",
                "definitions": {
                    "AccountLockedLongerDurationDenomResponse": {
                        "properties": {
                            "locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Longer Duration Denom Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedLongerDurationDenomResponse",
                    "definitions": {
                        "AccountLockedLongerDurationDenomResponse": {
                            "properties": {
                                "locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Longer Duration Denom Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "AccountLockedLongerDurationNotUnlockingOnlyRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedLongerDurationNotUnlockingOnlyRequest",
                "definitions": {
                    "AccountLockedLongerDurationNotUnlockingOnlyRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "format": "regex"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Longer Duration Not Unlocking Only Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedLongerDurationNotUnlockingOnlyRequest",
                    "definitions": {
                        "AccountLockedLongerDurationNotUnlockingOnlyRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "format": "regex"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Longer Duration Not Unlocking Only Request"
                        }
                    }
                }
            },
            "AccountLockedLongerDurationNotUnlockingOnlyResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedLongerDurationNotUnlockingOnlyResponse",
                "definitions": {
                    "AccountLockedLongerDurationNotUnlockingOnlyResponse": {
                        "properties": {
                            "locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Longer Duration Not Unlocking Only Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedLongerDurationNotUnlockingOnlyResponse",
                    "definitions": {
                        "AccountLockedLongerDurationNotUnlockingOnlyResponse": {
                            "properties": {
                                "locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Longer Duration Not Unlocking Only Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "AccountLockedLongerDurationRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedLongerDurationRequest",
                "definitions": {
                    "AccountLockedLongerDurationRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "format": "regex"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Longer Duration Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedLongerDurationRequest",
                    "definitions": {
                        "AccountLockedLongerDurationRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "format": "regex"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Longer Duration Request"
                        }
                    }
                }
            },
            "AccountLockedLongerDurationResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedLongerDurationResponse",
                "definitions": {
                    "AccountLockedLongerDurationResponse": {
                        "properties": {
                            "locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Longer Duration Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedLongerDurationResponse",
                    "definitions": {
                        "AccountLockedLongerDurationResponse": {
                            "properties": {
                                "locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Longer Duration Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "AccountLockedPastTimeDenomRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedPastTimeDenomRequest",
                "definitions": {
                    "AccountLockedPastTimeDenomRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "timestamp": {
                                "type": "string",
                                "format": "date-time"
                            },
                            "denom": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Past Time Denom Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedPastTimeDenomRequest",
                    "definitions": {
                        "AccountLockedPastTimeDenomRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "format": "date-time"
                                },
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Past Time Denom Request"
                        }
                    }
                }
            },
            "AccountLockedPastTimeDenomResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedPastTimeDenomResponse",
                "definitions": {
                    "AccountLockedPastTimeDenomResponse": {
                        "properties": {
                            "locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Past Time Denom Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedPastTimeDenomResponse",
                    "definitions": {
                        "AccountLockedPastTimeDenomResponse": {
                            "properties": {
                                "locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Past Time Denom Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "AccountLockedPastTimeNotUnlockingOnlyRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedPastTimeNotUnlockingOnlyRequest",
                "definitions": {
                    "AccountLockedPastTimeNotUnlockingOnlyRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "timestamp": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Past Time Not Unlocking Only Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedPastTimeNotUnlockingOnlyRequest",
                    "definitions": {
                        "AccountLockedPastTimeNotUnlockingOnlyRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Past Time Not Unlocking Only Request"
                        }
                    }
                }
            },
            "AccountLockedPastTimeNotUnlockingOnlyResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedPastTimeNotUnlockingOnlyResponse",
                "definitions": {
                    "AccountLockedPastTimeNotUnlockingOnlyResponse": {
                        "properties": {
                            "locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Past Time Not Unlocking Only Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedPastTimeNotUnlockingOnlyResponse",
                    "definitions": {
                        "AccountLockedPastTimeNotUnlockingOnlyResponse": {
                            "properties": {
                                "locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Past Time Not Unlocking Only Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "AccountLockedPastTimeRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedPastTimeRequest",
                "definitions": {
                    "AccountLockedPastTimeRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "timestamp": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Past Time Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedPastTimeRequest",
                    "definitions": {
                        "AccountLockedPastTimeRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Past Time Request"
                        }
                    }
                }
            },
            "AccountLockedPastTimeResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountLockedPastTimeResponse",
                "definitions": {
                    "AccountLockedPastTimeResponse": {
                        "properties": {
                            "locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Locked Past Time Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountLockedPastTimeResponse",
                    "definitions": {
                        "AccountLockedPastTimeResponse": {
                            "properties": {
                                "locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Locked Past Time Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "AccountUnlockableCoinsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountUnlockableCoinsRequest",
                "definitions": {
                    "AccountUnlockableCoinsRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Unlockable Coins Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountUnlockableCoinsRequest",
                    "definitions": {
                        "AccountUnlockableCoinsRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Unlockable Coins Request"
                        }
                    }
                }
            },
            "AccountUnlockableCoinsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountUnlockableCoinsResponse",
                "definitions": {
                    "AccountUnlockableCoinsResponse": {
                        "properties": {
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Unlockable Coins Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountUnlockableCoinsResponse",
                    "definitions": {
                        "AccountUnlockableCoinsResponse": {
                            "properties": {
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Unlockable Coins Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "AccountUnlockedBeforeTimeRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountUnlockedBeforeTimeRequest",
                "definitions": {
                    "AccountUnlockedBeforeTimeRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "timestamp": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Unlocked Before Time Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountUnlockedBeforeTimeRequest",
                    "definitions": {
                        "AccountUnlockedBeforeTimeRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Unlocked Before Time Request"
                        }
                    }
                }
            },
            "AccountUnlockedBeforeTimeResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountUnlockedBeforeTimeResponse",
                "definitions": {
                    "AccountUnlockedBeforeTimeResponse": {
                        "properties": {
                            "locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Unlocked Before Time Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountUnlockedBeforeTimeResponse",
                    "definitions": {
                        "AccountUnlockedBeforeTimeResponse": {
                            "properties": {
                                "locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Unlocked Before Time Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "AccountUnlockingCoinsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountUnlockingCoinsRequest",
                "definitions": {
                    "AccountUnlockingCoinsRequest": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Unlocking Coins Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountUnlockingCoinsRequest",
                    "definitions": {
                        "AccountUnlockingCoinsRequest": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Unlocking Coins Request"
                        }
                    }
                }
            },
            "AccountUnlockingCoinsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AccountUnlockingCoinsResponse",
                "definitions": {
                    "AccountUnlockingCoinsResponse": {
                        "properties": {
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Account Unlocking Coins Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AccountUnlockingCoinsResponse",
                    "definitions": {
                        "AccountUnlockingCoinsResponse": {
                            "properties": {
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Account Unlocking Coins Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "LockedDenomRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/LockedDenomRequest",
                "definitions": {
                    "LockedDenomRequest": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "format": "regex"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Locked Denom Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/LockedDenomRequest",
                    "definitions": {
                        "LockedDenomRequest": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "format": "regex"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Locked Denom Request"
                        }
                    }
                }
            },
            "LockedDenomResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/LockedDenomResponse",
                "definitions": {
                    "LockedDenomResponse": {
                        "properties": {
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Locked Denom Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/LockedDenomResponse",
                    "definitions": {
                        "LockedDenomResponse": {
                            "properties": {
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Locked Denom Response"
                        }
                    }
                }
            },
            "LockedRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/LockedRequest",
                "definitions": {
                    "LockedRequest": {
                        "properties": {
                            "lock_id": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Locked Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/LockedRequest",
                    "definitions": {
                        "LockedRequest": {
                            "properties": {
                                "lock_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Locked Request"
                        }
                    }
                }
            },
            "LockedResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/LockedResponse",
                "definitions": {
                    "LockedResponse": {
                        "properties": {
                            "lock": {
                                "$ref": "#/definitions/osmosis.lockup.PeriodLock",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Locked Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/LockedResponse",
                    "definitions": {
                        "LockedResponse": {
                            "properties": {
                                "lock": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Locked Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "ModuleBalanceRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ModuleBalanceRequest",
                "definitions": {
                    "ModuleBalanceRequest": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Module Balance Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ModuleBalanceRequest",
                    "definitions": {
                        "ModuleBalanceRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Module Balance Request"
                        }
                    }
                }
            },
            "ModuleBalanceResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ModuleBalanceResponse",
                "definitions": {
                    "ModuleBalanceResponse": {
                        "properties": {
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Module Balance Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ModuleBalanceResponse",
                    "definitions": {
                        "ModuleBalanceResponse": {
                            "properties": {
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Module Balance Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "ModuleLockedAmountRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ModuleLockedAmountRequest",
                "definitions": {
                    "ModuleLockedAmountRequest": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Module Locked Amount Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ModuleLockedAmountRequest",
                    "definitions": {
                        "ModuleLockedAmountRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Module Locked Amount Request"
                        }
                    }
                }
            },
            "ModuleLockedAmountResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ModuleLockedAmountResponse",
                "definitions": {
                    "ModuleLockedAmountResponse": {
                        "properties": {
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Module Locked Amount Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ModuleLockedAmountResponse",
                    "definitions": {
                        "ModuleLockedAmountResponse": {
                            "properties": {
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Module Locked Amount Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "MsgBeginUnlocking": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgBeginUnlocking",
                "definitions": {
                    "MsgBeginUnlocking": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "ID": {
                                "type": "string"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Amount of unlocking coins. Unlock all if not set."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Begin Unlocking"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgBeginUnlocking",
                    "definitions": {
                        "MsgBeginUnlocking": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Amount of unlocking coins. Unlock all if not set."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Begin Unlocking"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "MsgBeginUnlockingAll": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgBeginUnlockingAll",
                "definitions": {
                    "MsgBeginUnlockingAll": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Begin Unlocking All"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgBeginUnlockingAll",
                    "definitions": {
                        "MsgBeginUnlockingAll": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Begin Unlocking All"
                        }
                    }
                }
            },
            "MsgBeginUnlockingAllResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgBeginUnlockingAllResponse",
                "definitions": {
                    "MsgBeginUnlockingAllResponse": {
                        "properties": {
                            "unlocks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Begin Unlocking All Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.PeriodLock": {
                        "properties": {
                            "ID": {
                                "type": "string",
                                "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                            },
                            "owner": {
                                "type": "string",
                                "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                "format": "regex"
                            },
                            "end_time": {
                                "type": "string",
                                "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                "format": "date-time"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array",
                                "description": "Coins are the tokens locked within the lock, kept in the module account."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Period Lock",
                        "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgBeginUnlockingAllResponse",
                    "definitions": {
                        "MsgBeginUnlockingAllResponse": {
                            "properties": {
                                "unlocks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.PeriodLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Begin Unlocking All Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.PeriodLock": {
                            "properties": {
                                "ID": {
                                    "type": "string",
                                    "description": "ID is the unique id of the lock. The ID of the lock is decided upon lock creation, incrementing by 1 for every lock."
                                },
                                "owner": {
                                    "type": "string",
                                    "description": "Owner is the account address of the lock owner. Only the owner can modify the state of the lock."
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the time needed for a lock to mature after unlocking has started.",
                                    "format": "regex"
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "EndTime refers to the time at which the lock would mature and get deleted. This value is first initialized when an unlock has started for the lock, end time being block time + duration.",
                                    "format": "date-time"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "Coins are the tokens locked within the lock, kept in the module account."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Period Lock",
                            "description": "PeriodLock is a single lock unit by period defined by the x/lockup module. It's a record of a locked coin at a specific time. It stores owner, duration, unlock time and the number of coins locked. A state of a period lock is created upon lock creation, and deleted once the lock has been matured after the `duration` has passed since unbonding started."
                        }
                    }
                }
            },
            "MsgBeginUnlockingResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgBeginUnlockingResponse",
                "definitions": {
                    "MsgBeginUnlockingResponse": {
                        "properties": {
                            "success": {
                                "type": "boolean"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Begin Unlocking Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgBeginUnlockingResponse",
                    "definitions": {
                        "MsgBeginUnlockingResponse": {
                            "properties": {
                                "success": {
                                    "type": "boolean"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Begin Unlocking Response"
                        }
                    }
                }
            },
            "MsgExtendLockup": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgExtendLockup",
                "definitions": {
                    "MsgExtendLockup": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "ID": {
                                "type": "string"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "duration to be set. fails if lower than the current duration, or is unlocking",
                                "format": "regex"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Extend Lockup",
                        "description": "MsgExtendLockup extends the existing lockup's duration. The new duration is longer than the original."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgExtendLockup",
                    "definitions": {
                        "MsgExtendLockup": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "ID": {
                                    "type": "string"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "duration to be set. fails if lower than the current duration, or is unlocking",
                                    "format": "regex"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Extend Lockup",
                            "description": "MsgExtendLockup extends the existing lockup's duration. The new duration is longer than the original."
                        }
                    }
                }
            },
            "MsgExtendLockupResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgExtendLockupResponse",
                "definitions": {
                    "MsgExtendLockupResponse": {
                        "properties": {
                            "success": {
                                "type": "boolean"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Extend Lockup Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgExtendLockupResponse",
                    "definitions": {
                        "MsgExtendLockupResponse": {
                            "properties": {
                                "success": {
                                    "type": "boolean"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Extend Lockup Response"
                        }
                    }
                }
            },
            "MsgLockTokens": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgLockTokens",
                "definitions": {
                    "MsgLockTokens": {
                        "properties": {
                            "owner": {
                                "type": "string"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "format": "regex"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Lock Tokens"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgLockTokens",
                    "definitions": {
                        "MsgLockTokens": {
                            "properties": {
                                "owner": {
                                    "type": "string"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "format": "regex"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Lock Tokens"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "MsgLockTokensResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgLockTokensResponse",
                "definitions": {
                    "MsgLockTokensResponse": {
                        "properties": {
                            "ID": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Lock Tokens Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgLockTokensResponse",
                    "definitions": {
                        "MsgLockTokensResponse": {
                            "properties": {
                                "ID": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Lock Tokens Response"
                        }
                    }
                }
            },
            "SyntheticLockupsByLockupIDRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SyntheticLockupsByLockupIDRequest",
                "definitions": {
                    "SyntheticLockupsByLockupIDRequest": {
                        "properties": {
                            "lock_id": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Synthetic Lockups By Lockup ID Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SyntheticLockupsByLockupIDRequest",
                    "definitions": {
                        "SyntheticLockupsByLockupIDRequest": {
                            "properties": {
                                "lock_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Synthetic Lockups By Lockup ID Request"
                        }
                    }
                }
            },
            "SyntheticLockupsByLockupIDResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SyntheticLockupsByLockupIDResponse",
                "definitions": {
                    "SyntheticLockupsByLockupIDResponse": {
                        "properties": {
                            "synthetic_locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.SyntheticLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Synthetic Lockups By Lockup ID Response"
                    },
                    "osmosis.lockup.SyntheticLock": {
                        "properties": {
                            "underlying_lock_id": {
                                "type": "string",
                                "description": "Underlying Lock ID is the underlying native lock's id for this synthetic lockup. A synthetic lock MUST have an underlying lock."
                            },
                            "synth_denom": {
                                "type": "string",
                                "description": "SynthDenom is the synthetic denom that is a combination of gamm share + bonding status + validator address."
                            },
                            "end_time": {
                                "type": "string",
                                "description": "used for unbonding synthetic lockups, for active synthetic lockups, this value is set to uninitialized value",
                                "format": "date-time"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the duration for a synthetic lock to mature at the point of unbonding has started.",
                                "format": "regex"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Synthetic Lock",
                        "description": "SyntheticLock is creating virtual lockup where new denom is combination of original denom and synthetic suffix. At the time of synthetic lockup creation and deletion, accumulation store is also being updated and on querier side, they can query as freely as native lockup."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SyntheticLockupsByLockupIDResponse",
                    "definitions": {
                        "SyntheticLockupsByLockupIDResponse": {
                            "properties": {
                                "synthetic_locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.SyntheticLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Synthetic Lockups By Lockup ID Response"
                        },
                        "osmosis.lockup.SyntheticLock": {
                            "properties": {
                                "underlying_lock_id": {
                                    "type": "string",
                                    "description": "Underlying Lock ID is the underlying native lock's id for this synthetic lockup. A synthetic lock MUST have an underlying lock."
                                },
                                "synth_denom": {
                                    "type": "string",
                                    "description": "SynthDenom is the synthetic denom that is a combination of gamm share + bonding status + validator address."
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "used for unbonding synthetic lockups, for active synthetic lockups, this value is set to uninitialized value",
                                    "format": "date-time"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the duration for a synthetic lock to mature at the point of unbonding has started.",
                                    "format": "regex"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Synthetic Lock",
                            "description": "SyntheticLock is creating virtual lockup where new denom is combination of original denom and synthetic suffix. At the time of synthetic lockup creation and deletion, accumulation store is also being updated and on querier side, they can query as freely as native lockup."
                        }
                    }
                }
            }
        },
        "mint": {
            "v1beta1": {
                "QueryEpochProvisionsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryEpochProvisionsRequest",
                    "definitions": {
                        "QueryEpochProvisionsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Epoch Provisions Request",
                            "description": "QueryEpochProvisionsRequest is the request type for the Query/EpochProvisions RPC method."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryEpochProvisionsRequest",
                        "definitions": {
                            "QueryEpochProvisionsRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Epoch Provisions Request",
                                "description": "QueryEpochProvisionsRequest is the request type for the Query/EpochProvisions RPC method."
                            }
                        }
                    }
                },
                "QueryEpochProvisionsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryEpochProvisionsResponse",
                    "definitions": {
                        "QueryEpochProvisionsResponse": {
                            "properties": {
                                "epoch_provisions": {
                                    "type": "string",
                                    "description": "epoch_provisions is the current minting per epoch provisions value.",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Epoch Provisions Response",
                            "description": "QueryEpochProvisionsResponse is the response type for the Query/EpochProvisions RPC method."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryEpochProvisionsResponse",
                        "definitions": {
                            "QueryEpochProvisionsResponse": {
                                "properties": {
                                    "epoch_provisions": {
                                        "type": "string",
                                        "description": "epoch_provisions is the current minting per epoch provisions value.",
                                        "format": "binary",
                                        "binaryEncoding": "base64"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Epoch Provisions Response",
                                "description": "QueryEpochProvisionsResponse is the response type for the Query/EpochProvisions RPC method."
                            }
                        }
                    }
                },
                "QueryParamsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryParamsRequest",
                    "definitions": {
                        "QueryParamsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Params Request",
                            "description": "QueryParamsRequest is the request type for the Query/Params RPC method."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryParamsRequest",
                        "definitions": {
                            "QueryParamsRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Params Request",
                                "description": "QueryParamsRequest is the request type for the Query/Params RPC method."
                            }
                        }
                    }
                },
                "QueryParamsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryParamsResponse",
                    "definitions": {
                        "QueryParamsResponse": {
                            "properties": {
                                "params": {
                                    "$ref": "#/definitions/osmosis.mint.v1beta1.Params",
                                    "additionalProperties": true,
                                    "description": "params defines the parameters of the module."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Params Response",
                            "description": "QueryParamsResponse is the response type for the Query/Params RPC method."
                        },
                        "osmosis.mint.v1beta1.DistributionProportions": {
                            "properties": {
                                "staking": {
                                    "type": "string",
                                    "description": "staking defines the proportion of the minted mint_denom that is to be allocated as staking rewards."
                                },
                                "pool_incentives": {
                                    "type": "string",
                                    "description": "pool_incentives defines the proportion of the minted mint_denom that is to be allocated as pool incentives."
                                },
                                "developer_rewards": {
                                    "type": "string",
                                    "description": "developer_rewards defines the proportion of the minted mint_denom that is to be allocated to developer rewards address."
                                },
                                "community_pool": {
                                    "type": "string",
                                    "description": "community_pool defines the proportion of the minted mint_denom that is to be allocated to the community pool."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Distribution Proportions",
                            "description": "DistributionProportions defines the distribution proportions of the minted denom. In other words, defines which stakeholders will receive the minted denoms and how much."
                        },
                        "osmosis.mint.v1beta1.Params": {
                            "properties": {
                                "mint_denom": {
                                    "type": "string",
                                    "description": "mint_denom is the denom of the coin to mint."
                                },
                                "genesis_epoch_provisions": {
                                    "type": "string",
                                    "description": "genesis_epoch_provisions epoch provisions from the first epoch."
                                },
                                "epoch_identifier": {
                                    "type": "string",
                                    "description": "epoch_identifier mint epoch identifier e.g. (day, week)."
                                },
                                "reduction_period_in_epochs": {
                                    "type": "string",
                                    "description": "reduction_period_in_epochs the number of epochs it takes to reduce the rewards."
                                },
                                "reduction_factor": {
                                    "type": "string",
                                    "description": "reduction_factor is the reduction multiplier to execute at the end of each period set by reduction_period_in_epochs."
                                },
                                "distribution_proportions": {
                                    "$ref": "#/definitions/osmosis.mint.v1beta1.DistributionProportions",
                                    "additionalProperties": true,
                                    "description": "distribution_proportions defines the distribution proportions of the minted denom. In other words, defines which stakeholders will receive the minted denoms and how much."
                                },
                                "weighted_developer_rewards_receivers": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.mint.v1beta1.WeightedAddress"
                                    },
                                    "type": "array",
                                    "description": "weighted_developer_rewards_receivers is the address to receive developer rewards with weights assignedt to each address. The final amount that each address receives is: epoch_provisions * distribution_proportions.developer_rewards * Address's Weight."
                                },
                                "minting_rewards_distribution_start_epoch": {
                                    "type": "string",
                                    "description": "minting_rewards_distribution_start_epoch start epoch to distribute minting rewards"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Params",
                            "description": "Params holds parameters for the x/mint module."
                        },
                        "osmosis.mint.v1beta1.WeightedAddress": {
                            "properties": {
                                "address": {
                                    "type": "string"
                                },
                                "weight": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Weighted Address",
                            "description": "WeightedAddress represents an address with a weight assigned to it. The weight is used to determine the proportion of the total minted tokens to be minted to the address."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryParamsResponse",
                        "definitions": {
                            "QueryParamsResponse": {
                                "properties": {
                                    "params": {
                                        "$ref": "#/definitions/osmosis.mint.v1beta1.Params",
                                        "additionalProperties": true,
                                        "description": "params defines the parameters of the module."
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Params Response",
                                "description": "QueryParamsResponse is the response type for the Query/Params RPC method."
                            },
                            "osmosis.mint.v1beta1.DistributionProportions": {
                                "properties": {
                                    "staking": {
                                        "type": "string",
                                        "description": "staking defines the proportion of the minted mint_denom that is to be allocated as staking rewards."
                                    },
                                    "pool_incentives": {
                                        "type": "string",
                                        "description": "pool_incentives defines the proportion of the minted mint_denom that is to be allocated as pool incentives."
                                    },
                                    "developer_rewards": {
                                        "type": "string",
                                        "description": "developer_rewards defines the proportion of the minted mint_denom that is to be allocated to developer rewards address."
                                    },
                                    "community_pool": {
                                        "type": "string",
                                        "description": "community_pool defines the proportion of the minted mint_denom that is to be allocated to the community pool."
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Distribution Proportions",
                                "description": "DistributionProportions defines the distribution proportions of the minted denom. In other words, defines which stakeholders will receive the minted denoms and how much."
                            },
                            "osmosis.mint.v1beta1.Params": {
                                "properties": {
                                    "mint_denom": {
                                        "type": "string",
                                        "description": "mint_denom is the denom of the coin to mint."
                                    },
                                    "genesis_epoch_provisions": {
                                        "type": "string",
                                        "description": "genesis_epoch_provisions epoch provisions from the first epoch."
                                    },
                                    "epoch_identifier": {
                                        "type": "string",
                                        "description": "epoch_identifier mint epoch identifier e.g. (day, week)."
                                    },
                                    "reduction_period_in_epochs": {
                                        "type": "string",
                                        "description": "reduction_period_in_epochs the number of epochs it takes to reduce the rewards."
                                    },
                                    "reduction_factor": {
                                        "type": "string",
                                        "description": "reduction_factor is the reduction multiplier to execute at the end of each period set by reduction_period_in_epochs."
                                    },
                                    "distribution_proportions": {
                                        "$ref": "#/definitions/osmosis.mint.v1beta1.DistributionProportions",
                                        "additionalProperties": true,
                                        "description": "distribution_proportions defines the distribution proportions of the minted denom. In other words, defines which stakeholders will receive the minted denoms and how much."
                                    },
                                    "weighted_developer_rewards_receivers": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.mint.v1beta1.WeightedAddress"
                                        },
                                        "type": "array",
                                        "description": "weighted_developer_rewards_receivers is the address to receive developer rewards with weights assignedt to each address. The final amount that each address receives is: epoch_provisions * distribution_proportions.developer_rewards * Address's Weight."
                                    },
                                    "minting_rewards_distribution_start_epoch": {
                                        "type": "string",
                                        "description": "minting_rewards_distribution_start_epoch start epoch to distribute minting rewards"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Params",
                                "description": "Params holds parameters for the x/mint module."
                            },
                            "osmosis.mint.v1beta1.WeightedAddress": {
                                "properties": {
                                    "address": {
                                        "type": "string"
                                    },
                                    "weight": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Weighted Address",
                                "description": "WeightedAddress represents an address with a weight assigned to it. The weight is used to determine the proportion of the total minted tokens to be minted to the address."
                            }
                        }
                    }
                }
            }
        },
        "pool-incentives": {
            "v1beta1": {
                "IncentivizedPool": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/IncentivizedPool",
                    "definitions": {
                        "IncentivizedPool": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                },
                                "lockable_duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "format": "regex"
                                },
                                "gauge_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Incentivized Pool"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/IncentivizedPool",
                        "definitions": {
                            "IncentivizedPool": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "lockable_duration": {
                                        "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                        "type": "string",
                                        "format": "regex"
                                    },
                                    "gauge_id": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Incentivized Pool"
                            }
                        }
                    }
                },
                "QueryDistrInfoRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDistrInfoRequest",
                    "definitions": {
                        "QueryDistrInfoRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Distr Info Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDistrInfoRequest",
                        "definitions": {
                            "QueryDistrInfoRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Distr Info Request"
                            }
                        }
                    }
                },
                "QueryDistrInfoResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDistrInfoResponse",
                    "definitions": {
                        "QueryDistrInfoResponse": {
                            "properties": {
                                "distr_info": {
                                    "$ref": "#/definitions/osmosis.poolincentives.v1beta1.DistrInfo",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Distr Info Response"
                        },
                        "osmosis.poolincentives.v1beta1.DistrInfo": {
                            "properties": {
                                "total_weight": {
                                    "type": "string"
                                },
                                "records": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.poolincentives.v1beta1.DistrRecord"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Distr Info"
                        },
                        "osmosis.poolincentives.v1beta1.DistrRecord": {
                            "properties": {
                                "gauge_id": {
                                    "type": "string"
                                },
                                "weight": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Distr Record"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDistrInfoResponse",
                        "definitions": {
                            "QueryDistrInfoResponse": {
                                "properties": {
                                    "distr_info": {
                                        "$ref": "#/definitions/osmosis.poolincentives.v1beta1.DistrInfo",
                                        "additionalProperties": true
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Distr Info Response"
                            },
                            "osmosis.poolincentives.v1beta1.DistrInfo": {
                                "properties": {
                                    "total_weight": {
                                        "type": "string"
                                    },
                                    "records": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.poolincentives.v1beta1.DistrRecord"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Distr Info"
                            },
                            "osmosis.poolincentives.v1beta1.DistrRecord": {
                                "properties": {
                                    "gauge_id": {
                                        "type": "string"
                                    },
                                    "weight": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Distr Record"
                            }
                        }
                    }
                },
                "QueryExternalIncentiveGaugesRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryExternalIncentiveGaugesRequest",
                    "definitions": {
                        "QueryExternalIncentiveGaugesRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query External Incentive Gauges Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryExternalIncentiveGaugesRequest",
                        "definitions": {
                            "QueryExternalIncentiveGaugesRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query External Incentive Gauges Request"
                            }
                        }
                    }
                },
                "QueryExternalIncentiveGaugesResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryExternalIncentiveGaugesResponse",
                    "definitions": {
                        "QueryExternalIncentiveGaugesResponse": {
                            "properties": {
                                "data": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.incentives.Gauge"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query External Incentive Gauges Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.incentives.Gauge": {
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "id is the unique ID of a Gauge"
                                },
                                "is_perpetual": {
                                    "type": "boolean",
                                    "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                                },
                                "distribute_to": {
                                    "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                    "additionalProperties": true,
                                    "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                                },
                                "start_time": {
                                    "type": "string",
                                    "description": "start_time is the distribution start time",
                                    "format": "date-time"
                                },
                                "num_epochs_paid_over": {
                                    "type": "string",
                                    "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                                },
                                "filled_epochs": {
                                    "type": "string",
                                    "description": "filled_epochs is the number of epochs distribution has been completed on already"
                                },
                                "distributed_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array",
                                    "description": "distributed_coins are coins that have been distributed already"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge",
                            "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                        },
                        "osmosis.lockup.QueryCondition": {
                            "properties": {
                                "lock_query_type": {
                                    "enum": [
                                        "ByDuration",
                                        0,
                                        "ByTime",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Lock Query Type",
                                    "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                                },
                                "denom": {
                                    "type": "string",
                                    "description": "Denom represents the token denomination we are looking to lock up"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                    "format": "regex"
                                },
                                "timestamp": {
                                    "type": "string",
                                    "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                    "format": "date-time"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Condition",
                            "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryExternalIncentiveGaugesResponse",
                        "definitions": {
                            "QueryExternalIncentiveGaugesResponse": {
                                "properties": {
                                    "data": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.incentives.Gauge"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query External Incentive Gauges Response"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            },
                            "osmosis.incentives.Gauge": {
                                "properties": {
                                    "id": {
                                        "type": "string",
                                        "description": "id is the unique ID of a Gauge"
                                    },
                                    "is_perpetual": {
                                        "type": "boolean",
                                        "description": "is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge Non-perpetual gauges distribute their tokens equally per epoch while the gauge is in the active period. Perpetual gauges distribute all their tokens at a single time and only distribute their tokens again once the gauge is refilled, Intended for use with incentives that get refilled daily."
                                    },
                                    "distribute_to": {
                                        "$ref": "#/definitions/osmosis.lockup.QueryCondition",
                                        "additionalProperties": true,
                                        "description": "distribute_to is where the gauge rewards are distributed to. This is queried via lock duration or by timestamp"
                                    },
                                    "coins": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array",
                                        "description": "coins is the total amount of coins that have been in the gauge Can distribute multiple coin denoms"
                                    },
                                    "start_time": {
                                        "type": "string",
                                        "description": "start_time is the distribution start time",
                                        "format": "date-time"
                                    },
                                    "num_epochs_paid_over": {
                                        "type": "string",
                                        "description": "num_epochs_paid_over is the number of total epochs distribution will be completed over"
                                    },
                                    "filled_epochs": {
                                        "type": "string",
                                        "description": "filled_epochs is the number of epochs distribution has been completed on already"
                                    },
                                    "distributed_coins": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array",
                                        "description": "distributed_coins are coins that have been distributed already"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Gauge",
                                "description": "Gauge is an object that stores and distributes yields to recipients who satisfy certain conditions. Currently gauges support conditions around the duration for which a given denom is locked."
                            },
                            "osmosis.lockup.QueryCondition": {
                                "properties": {
                                    "lock_query_type": {
                                        "enum": [
                                            "ByDuration",
                                            0,
                                            "ByTime",
                                            1
                                        ],
                                        "oneOf": [
                                            {
                                                "type": "string"
                                            },
                                            {
                                                "type": "integer"
                                            }
                                        ],
                                        "title": "Lock Query Type",
                                        "description": "LockQueryType defines the type of the lock query that can either be by duration or start time of the lock."
                                    },
                                    "denom": {
                                        "type": "string",
                                        "description": "Denom represents the token denomination we are looking to lock up"
                                    },
                                    "duration": {
                                        "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                        "type": "string",
                                        "description": "Duration is used to query locks with longer duration than the specified duration. Duration field must not be nil when the lock query type is `ByLockDuration`.",
                                        "format": "regex"
                                    },
                                    "timestamp": {
                                        "type": "string",
                                        "description": "Timestamp is used by locks started before the specified duration. Timestamp field must not be nil when the lock query type is `ByLockTime`. Querying locks with timestamp is currently not implemented.",
                                        "format": "date-time"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Condition",
                                "description": "QueryCondition is a struct used for querying locks upon different conditions. Duration field and timestamp fields could be optional, depending on the LockQueryType."
                            }
                        }
                    }
                },
                "QueryGaugeIdsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryGaugeIdsRequest",
                    "definitions": {
                        "QueryGaugeIdsRequest": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Gauge Ids Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryGaugeIdsRequest",
                        "definitions": {
                            "QueryGaugeIdsRequest": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Gauge Ids Request"
                            }
                        }
                    }
                },
                "QueryGaugeIdsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryGaugeIdsResponse",
                    "definitions": {
                        "QueryGaugeIdsResponse": {
                            "properties": {
                                "gauge_ids_with_duration": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Gauge Ids Response"
                        },
                        "osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration": {
                            "properties": {
                                "gauge_id": {
                                    "type": "string"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "format": "regex"
                                },
                                "gauge_incentive_percentage": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Gauge Id With Duration"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryGaugeIdsResponse",
                        "definitions": {
                            "QueryGaugeIdsResponse": {
                                "properties": {
                                    "gauge_ids_with_duration": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Gauge Ids Response"
                            },
                            "osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration": {
                                "properties": {
                                    "gauge_id": {
                                        "type": "string"
                                    },
                                    "duration": {
                                        "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                        "type": "string",
                                        "format": "regex"
                                    },
                                    "gauge_incentive_percentage": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Gauge Id With Duration"
                            }
                        }
                    }
                },
                "QueryIncentivizedPoolsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryIncentivizedPoolsRequest",
                    "definitions": {
                        "QueryIncentivizedPoolsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Incentivized Pools Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryIncentivizedPoolsRequest",
                        "definitions": {
                            "QueryIncentivizedPoolsRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Incentivized Pools Request"
                            }
                        }
                    }
                },
                "QueryIncentivizedPoolsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryIncentivizedPoolsResponse",
                    "definitions": {
                        "QueryIncentivizedPoolsResponse": {
                            "properties": {
                                "incentivized_pools": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.poolincentives.v1beta1.IncentivizedPool"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Incentivized Pools Response"
                        },
                        "osmosis.poolincentives.v1beta1.IncentivizedPool": {
                            "properties": {
                                "pool_id": {
                                    "type": "string"
                                },
                                "lockable_duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "format": "regex"
                                },
                                "gauge_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Incentivized Pool"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryIncentivizedPoolsResponse",
                        "definitions": {
                            "QueryIncentivizedPoolsResponse": {
                                "properties": {
                                    "incentivized_pools": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.poolincentives.v1beta1.IncentivizedPool"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Incentivized Pools Response"
                            },
                            "osmosis.poolincentives.v1beta1.IncentivizedPool": {
                                "properties": {
                                    "pool_id": {
                                        "type": "string"
                                    },
                                    "lockable_duration": {
                                        "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                        "type": "string",
                                        "format": "regex"
                                    },
                                    "gauge_id": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Incentivized Pool"
                            }
                        }
                    }
                },
                "QueryLockableDurationsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryLockableDurationsRequest",
                    "definitions": {
                        "QueryLockableDurationsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Lockable Durations Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryLockableDurationsRequest",
                        "definitions": {
                            "QueryLockableDurationsRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Lockable Durations Request"
                            }
                        }
                    }
                },
                "QueryLockableDurationsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryLockableDurationsResponse",
                    "definitions": {
                        "QueryLockableDurationsResponse": {
                            "properties": {
                                "lockable_durations": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "items": {
                                        "type": "string"
                                    },
                                    "type": "array",
                                    "format": "regex"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Lockable Durations Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryLockableDurationsResponse",
                        "definitions": {
                            "QueryLockableDurationsResponse": {
                                "properties": {
                                    "lockable_durations": {
                                        "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                        "items": {
                                            "type": "string"
                                        },
                                        "type": "array",
                                        "format": "regex"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Lockable Durations Response"
                            }
                        }
                    }
                },
                "QueryParamsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryParamsRequest",
                    "definitions": {
                        "QueryParamsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Params Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryParamsRequest",
                        "definitions": {
                            "QueryParamsRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Params Request"
                            }
                        }
                    }
                },
                "QueryParamsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryParamsResponse",
                    "definitions": {
                        "QueryParamsResponse": {
                            "properties": {
                                "params": {
                                    "$ref": "#/definitions/osmosis.poolincentives.v1beta1.Params",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Params Response"
                        },
                        "osmosis.poolincentives.v1beta1.Params": {
                            "properties": {
                                "minted_denom": {
                                    "type": "string",
                                    "description": "minted_denom is the denomination of the coin expected to be minted by the minting module. Pool-incentives module doesn’t actually mint the coin itself, but rather manages the distribution of coins that matches the defined minted_denom."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Params"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryParamsResponse",
                        "definitions": {
                            "QueryParamsResponse": {
                                "properties": {
                                    "params": {
                                        "$ref": "#/definitions/osmosis.poolincentives.v1beta1.Params",
                                        "additionalProperties": true
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Params Response"
                            },
                            "osmosis.poolincentives.v1beta1.Params": {
                                "properties": {
                                    "minted_denom": {
                                        "type": "string",
                                        "description": "minted_denom is the denomination of the coin expected to be minted by the minting module. Pool-incentives module doesn’t actually mint the coin itself, but rather manages the distribution of coins that matches the defined minted_denom."
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Params"
                            }
                        }
                    }
                }
            }
        },
        "superfluid": {
            "AllAssetsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AllAssetsRequest",
                "definitions": {
                    "AllAssetsRequest": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "All Assets Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AllAssetsRequest",
                    "definitions": {
                        "AllAssetsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "All Assets Request"
                        }
                    }
                }
            },
            "AllAssetsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AllAssetsResponse",
                "definitions": {
                    "AllAssetsResponse": {
                        "properties": {
                            "assets": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.superfluid.SuperfluidAsset"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "All Assets Response"
                    },
                    "osmosis.superfluid.SuperfluidAsset": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "asset_type": {
                                "enum": [
                                    "SuperfluidAssetTypeNative",
                                    0,
                                    "SuperfluidAssetTypeLPShare",
                                    1
                                ],
                                "oneOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ],
                                "title": "Superfluid Asset Type",
                                "description": "SuperfluidAssetType indicates whether the superfluid asset is a native token itself or the lp share of a pool."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Asset",
                        "description": "SuperfluidAsset stores the pair of superfluid asset type and denom pair"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AllAssetsResponse",
                    "definitions": {
                        "AllAssetsResponse": {
                            "properties": {
                                "assets": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.superfluid.SuperfluidAsset"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "All Assets Response"
                        },
                        "osmosis.superfluid.SuperfluidAsset": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "asset_type": {
                                    "enum": [
                                        "SuperfluidAssetTypeNative",
                                        0,
                                        "SuperfluidAssetTypeLPShare",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Superfluid Asset Type",
                                    "description": "SuperfluidAssetType indicates whether the superfluid asset is a native token itself or the lp share of a pool."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Asset",
                            "description": "SuperfluidAsset stores the pair of superfluid asset type and denom pair"
                        }
                    }
                }
            },
            "AllIntermediaryAccountsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AllIntermediaryAccountsRequest",
                "definitions": {
                    "AllIntermediaryAccountsRequest": {
                        "properties": {
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "All Intermediary Accounts Request"
                    },
                    "cosmos.base.query.v1beta1.PageRequest": {
                        "properties": {
                            "key": {
                                "type": "string",
                                "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "offset": {
                                "type": "string",
                                "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                            },
                            "limit": {
                                "type": "string",
                                "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                            },
                            "count_total": {
                                "type": "boolean",
                                "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                            },
                            "reverse": {
                                "type": "boolean",
                                "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Request",
                        "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AllIntermediaryAccountsRequest",
                    "definitions": {
                        "AllIntermediaryAccountsRequest": {
                            "properties": {
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageRequest",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "All Intermediary Accounts Request"
                        },
                        "cosmos.base.query.v1beta1.PageRequest": {
                            "properties": {
                                "key": {
                                    "type": "string",
                                    "description": "key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set.",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "offset": {
                                    "type": "string",
                                    "description": "offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set."
                                },
                                "limit": {
                                    "type": "string",
                                    "description": "limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app."
                                },
                                "count_total": {
                                    "type": "boolean",
                                    "description": "count_total is set to true  to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set."
                                },
                                "reverse": {
                                    "type": "boolean",
                                    "description": "reverse is set to true if results are to be returned in the descending order. Since: cosmos-sdk 0.43"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Request",
                            "description": "PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:  message SomeRequest {          Foo some_parameter = 1;          PageRequest pagination = 2;  }"
                        }
                    }
                }
            },
            "AllIntermediaryAccountsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AllIntermediaryAccountsResponse",
                "definitions": {
                    "AllIntermediaryAccountsResponse": {
                        "properties": {
                            "accounts": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.superfluid.SuperfluidIntermediaryAccountInfo"
                                },
                                "type": "array"
                            },
                            "pagination": {
                                "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "All Intermediary Accounts Response"
                    },
                    "cosmos.base.query.v1beta1.PageResponse": {
                        "properties": {
                            "next_key": {
                                "type": "string",
                                "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                "format": "binary",
                                "binaryEncoding": "base64"
                            },
                            "total": {
                                "type": "string",
                                "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Page Response",
                        "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                    },
                    "osmosis.superfluid.SuperfluidIntermediaryAccountInfo": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "val_addr": {
                                "type": "string"
                            },
                            "gauge_id": {
                                "type": "string"
                            },
                            "address": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Intermediary Account Info"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AllIntermediaryAccountsResponse",
                    "definitions": {
                        "AllIntermediaryAccountsResponse": {
                            "properties": {
                                "accounts": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.superfluid.SuperfluidIntermediaryAccountInfo"
                                    },
                                    "type": "array"
                                },
                                "pagination": {
                                    "$ref": "#/definitions/cosmos.base.query.v1beta1.PageResponse",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "All Intermediary Accounts Response"
                        },
                        "cosmos.base.query.v1beta1.PageResponse": {
                            "properties": {
                                "next_key": {
                                    "type": "string",
                                    "description": "next_key is the key to be passed to PageRequest.key to query the next page most efficiently",
                                    "format": "binary",
                                    "binaryEncoding": "base64"
                                },
                                "total": {
                                    "type": "string",
                                    "description": "total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Page Response",
                            "description": "PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.  message SomeResponse {          repeated Bar results = 1;          PageResponse page = 2;  }"
                        },
                        "osmosis.superfluid.SuperfluidIntermediaryAccountInfo": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "val_addr": {
                                    "type": "string"
                                },
                                "gauge_id": {
                                    "type": "string"
                                },
                                "address": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Intermediary Account Info"
                        }
                    }
                }
            },
            "AssetMultiplierRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AssetMultiplierRequest",
                "definitions": {
                    "AssetMultiplierRequest": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Asset Multiplier Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AssetMultiplierRequest",
                    "definitions": {
                        "AssetMultiplierRequest": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Asset Multiplier Request"
                        }
                    }
                }
            },
            "AssetMultiplierResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AssetMultiplierResponse",
                "definitions": {
                    "AssetMultiplierResponse": {
                        "properties": {
                            "osmo_equivalent_multiplier": {
                                "$ref": "#/definitions/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Asset Multiplier Response"
                    },
                    "osmosis.superfluid.OsmoEquivalentMultiplierRecord": {
                        "properties": {
                            "epoch_number": {
                                "type": "string"
                            },
                            "denom": {
                                "type": "string",
                                "description": "superfluid asset denom, can be LP token or native token"
                            },
                            "multiplier": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Osmo Equivalent Multiplier Record",
                        "description": "The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we treat an LP share as having, for all of epoch N. Eventually this is intended to be set as the Time-weighted-average-osmo-backing for the entire duration of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior epochs rewards) However for now, this is not the TWAP but instead the spot price at the boundary. For different types of assets in the future, it could change."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AssetMultiplierResponse",
                    "definitions": {
                        "AssetMultiplierResponse": {
                            "properties": {
                                "osmo_equivalent_multiplier": {
                                    "$ref": "#/definitions/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Asset Multiplier Response"
                        },
                        "osmosis.superfluid.OsmoEquivalentMultiplierRecord": {
                            "properties": {
                                "epoch_number": {
                                    "type": "string"
                                },
                                "denom": {
                                    "type": "string",
                                    "description": "superfluid asset denom, can be LP token or native token"
                                },
                                "multiplier": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Osmo Equivalent Multiplier Record",
                            "description": "The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we treat an LP share as having, for all of epoch N. Eventually this is intended to be set as the Time-weighted-average-osmo-backing for the entire duration of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior epochs rewards) However for now, this is not the TWAP but instead the spot price at the boundary. For different types of assets in the future, it could change."
                        }
                    }
                }
            },
            "AssetTypeRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AssetTypeRequest",
                "definitions": {
                    "AssetTypeRequest": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Asset Type Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AssetTypeRequest",
                    "definitions": {
                        "AssetTypeRequest": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Asset Type Request"
                        }
                    }
                }
            },
            "AssetTypeResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/AssetTypeResponse",
                "definitions": {
                    "AssetTypeResponse": {
                        "properties": {
                            "asset_type": {
                                "enum": [
                                    "SuperfluidAssetTypeNative",
                                    0,
                                    "SuperfluidAssetTypeLPShare",
                                    1
                                ],
                                "oneOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ],
                                "title": "Superfluid Asset Type",
                                "description": "SuperfluidAssetType indicates whether the superfluid asset is a native token itself or the lp share of a pool."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Asset Type Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/AssetTypeResponse",
                    "definitions": {
                        "AssetTypeResponse": {
                            "properties": {
                                "asset_type": {
                                    "enum": [
                                        "SuperfluidAssetTypeNative",
                                        0,
                                        "SuperfluidAssetTypeLPShare",
                                        1
                                    ],
                                    "oneOf": [
                                        {
                                            "type": "string"
                                        },
                                        {
                                            "type": "integer"
                                        }
                                    ],
                                    "title": "Superfluid Asset Type",
                                    "description": "SuperfluidAssetType indicates whether the superfluid asset is a native token itself or the lp share of a pool."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Asset Type Response"
                        }
                    }
                }
            },
            "ConnectedIntermediaryAccountRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ConnectedIntermediaryAccountRequest",
                "definitions": {
                    "ConnectedIntermediaryAccountRequest": {
                        "properties": {
                            "lock_id": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Connected Intermediary Account Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ConnectedIntermediaryAccountRequest",
                    "definitions": {
                        "ConnectedIntermediaryAccountRequest": {
                            "properties": {
                                "lock_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Connected Intermediary Account Request"
                        }
                    }
                }
            },
            "ConnectedIntermediaryAccountResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/ConnectedIntermediaryAccountResponse",
                "definitions": {
                    "ConnectedIntermediaryAccountResponse": {
                        "properties": {
                            "account": {
                                "$ref": "#/definitions/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Connected Intermediary Account Response"
                    },
                    "osmosis.superfluid.SuperfluidIntermediaryAccountInfo": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "val_addr": {
                                "type": "string"
                            },
                            "gauge_id": {
                                "type": "string"
                            },
                            "address": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Intermediary Account Info"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/ConnectedIntermediaryAccountResponse",
                    "definitions": {
                        "ConnectedIntermediaryAccountResponse": {
                            "properties": {
                                "account": {
                                    "$ref": "#/definitions/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Connected Intermediary Account Response"
                        },
                        "osmosis.superfluid.SuperfluidIntermediaryAccountInfo": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "val_addr": {
                                    "type": "string"
                                },
                                "gauge_id": {
                                    "type": "string"
                                },
                                "address": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Intermediary Account Info"
                        }
                    }
                }
            },
            "EstimateSuperfluidDelegatedAmountByValidatorDenomRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
                "definitions": {
                    "EstimateSuperfluidDelegatedAmountByValidatorDenomRequest": {
                        "properties": {
                            "validator_address": {
                                "type": "string"
                            },
                            "denom": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Estimate Superfluid Delegated Amount By Validator Denom Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
                    "definitions": {
                        "EstimateSuperfluidDelegatedAmountByValidatorDenomRequest": {
                            "properties": {
                                "validator_address": {
                                    "type": "string"
                                },
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Estimate Superfluid Delegated Amount By Validator Denom Request"
                        }
                    }
                }
            },
            "EstimateSuperfluidDelegatedAmountByValidatorDenomResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
                "definitions": {
                    "EstimateSuperfluidDelegatedAmountByValidatorDenomResponse": {
                        "properties": {
                            "total_delegated_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Estimate Superfluid Delegated Amount By Validator Denom Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
                    "definitions": {
                        "EstimateSuperfluidDelegatedAmountByValidatorDenomResponse": {
                            "properties": {
                                "total_delegated_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Estimate Superfluid Delegated Amount By Validator Denom Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "MsgLockAndSuperfluidDelegate": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgLockAndSuperfluidDelegate",
                "definitions": {
                    "MsgLockAndSuperfluidDelegate": {
                        "properties": {
                            "sender": {
                                "type": "string"
                            },
                            "coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            },
                            "val_addr": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "message MsgSuperfluidRedelegate {\n   string sender = 1 [ (gogoproto.moretags) = \"yaml:\\\"sender\\\"\" ];\n   uint64 lock_id = 2;\n   string new_val_addr = 3;\n }\n message MsgSuperfluidRedelegateResponse {}",
                        "description": "message MsgSuperfluidRedelegate {   string sender = 1 [ (gogoproto.moretags) = \"yaml:\\\"sender\\\"\" ];   uint64 lock_id = 2;   string new_val_addr = 3; } message MsgSuperfluidRedelegateResponse {}  MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration, and then does a superfluid lock from the newly created lockup, to the specified validator addr."
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgLockAndSuperfluidDelegate",
                    "definitions": {
                        "MsgLockAndSuperfluidDelegate": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                },
                                "val_addr": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "message MsgSuperfluidRedelegate {\n   string sender = 1 [ (gogoproto.moretags) = \"yaml:\\\"sender\\\"\" ];\n   uint64 lock_id = 2;\n   string new_val_addr = 3;\n }\n message MsgSuperfluidRedelegateResponse {}",
                            "description": "message MsgSuperfluidRedelegate {   string sender = 1 [ (gogoproto.moretags) = \"yaml:\\\"sender\\\"\" ];   uint64 lock_id = 2;   string new_val_addr = 3; } message MsgSuperfluidRedelegateResponse {}  MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration, and then does a superfluid lock from the newly created lockup, to the specified validator addr."
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "MsgLockAndSuperfluidDelegateResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgLockAndSuperfluidDelegateResponse",
                "definitions": {
                    "MsgLockAndSuperfluidDelegateResponse": {
                        "properties": {
                            "ID": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Lock And Superfluid Delegate Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgLockAndSuperfluidDelegateResponse",
                    "definitions": {
                        "MsgLockAndSuperfluidDelegateResponse": {
                            "properties": {
                                "ID": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Lock And Superfluid Delegate Response"
                        }
                    }
                }
            },
            "MsgSuperfluidDelegate": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgSuperfluidDelegate",
                "definitions": {
                    "MsgSuperfluidDelegate": {
                        "properties": {
                            "sender": {
                                "type": "string"
                            },
                            "lock_id": {
                                "type": "string"
                            },
                            "val_addr": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Superfluid Delegate"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSuperfluidDelegate",
                    "definitions": {
                        "MsgSuperfluidDelegate": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "lock_id": {
                                    "type": "string"
                                },
                                "val_addr": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Superfluid Delegate"
                        }
                    }
                }
            },
            "MsgSuperfluidDelegateResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgSuperfluidDelegateResponse",
                "definitions": {
                    "MsgSuperfluidDelegateResponse": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Superfluid Delegate Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSuperfluidDelegateResponse",
                    "definitions": {
                        "MsgSuperfluidDelegateResponse": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Superfluid Delegate Response"
                        }
                    }
                }
            },
            "MsgSuperfluidUnbondLock": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgSuperfluidUnbondLock",
                "definitions": {
                    "MsgSuperfluidUnbondLock": {
                        "properties": {
                            "sender": {
                                "type": "string"
                            },
                            "lock_id": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Superfluid Unbond Lock"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSuperfluidUnbondLock",
                    "definitions": {
                        "MsgSuperfluidUnbondLock": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "lock_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Superfluid Unbond Lock"
                        }
                    }
                }
            },
            "MsgSuperfluidUnbondLockResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgSuperfluidUnbondLockResponse",
                "definitions": {
                    "MsgSuperfluidUnbondLockResponse": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Superfluid Unbond Lock Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSuperfluidUnbondLockResponse",
                    "definitions": {
                        "MsgSuperfluidUnbondLockResponse": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Superfluid Unbond Lock Response"
                        }
                    }
                }
            },
            "MsgSuperfluidUndelegate": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgSuperfluidUndelegate",
                "definitions": {
                    "MsgSuperfluidUndelegate": {
                        "properties": {
                            "sender": {
                                "type": "string"
                            },
                            "lock_id": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Superfluid Undelegate"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSuperfluidUndelegate",
                    "definitions": {
                        "MsgSuperfluidUndelegate": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "lock_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Superfluid Undelegate"
                        }
                    }
                }
            },
            "MsgSuperfluidUndelegateResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgSuperfluidUndelegateResponse",
                "definitions": {
                    "MsgSuperfluidUndelegateResponse": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Superfluid Undelegate Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgSuperfluidUndelegateResponse",
                    "definitions": {
                        "MsgSuperfluidUndelegateResponse": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Superfluid Undelegate Response"
                        }
                    }
                }
            },
            "MsgUnPoolWhitelistedPool": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgUnPoolWhitelistedPool",
                "definitions": {
                    "MsgUnPoolWhitelistedPool": {
                        "properties": {
                            "sender": {
                                "type": "string"
                            },
                            "pool_id": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Un Pool Whitelisted Pool",
                        "description": "MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is associated with pool pool_id. If pool_id is not approved for unpooling by governance, this is a no-op. Unpooling takes the locked gamm shares, and runs \"ExitPool\" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new lock for every constituent token, with the duration associated with the lock. If the lock was unbonding, the new lockup durations should be the time left until unbond completion."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgUnPoolWhitelistedPool",
                    "definitions": {
                        "MsgUnPoolWhitelistedPool": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "pool_id": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Un Pool Whitelisted Pool",
                            "description": "MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is associated with pool pool_id. If pool_id is not approved for unpooling by governance, this is a no-op. Unpooling takes the locked gamm shares, and runs \"ExitPool\" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new lock for every constituent token, with the duration associated with the lock. If the lock was unbonding, the new lockup durations should be the time left until unbond completion."
                        }
                    }
                }
            },
            "MsgUnPoolWhitelistedPoolResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/MsgUnPoolWhitelistedPoolResponse",
                "definitions": {
                    "MsgUnPoolWhitelistedPoolResponse": {
                        "properties": {
                            "exited_lock_ids": {
                                "items": {
                                    "type": "string"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Msg Un Pool Whitelisted Pool Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgUnPoolWhitelistedPoolResponse",
                    "definitions": {
                        "MsgUnPoolWhitelistedPoolResponse": {
                            "properties": {
                                "exited_lock_ids": {
                                    "items": {
                                        "type": "string"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Un Pool Whitelisted Pool Response"
                        }
                    }
                }
            },
            "QueryParamsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryParamsRequest",
                "definitions": {
                    "QueryParamsRequest": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Params Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryParamsRequest",
                    "definitions": {
                        "QueryParamsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Params Request"
                        }
                    }
                }
            },
            "QueryParamsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryParamsResponse",
                "definitions": {
                    "QueryParamsResponse": {
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/osmosis.superfluid.Params",
                                "additionalProperties": true,
                                "description": "params defines the parameters of the module."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Params Response"
                    },
                    "osmosis.superfluid.Params": {
                        "properties": {
                            "minimum_risk_factor": {
                                "type": "string",
                                "description": "minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for superfluid staking, default: 5%. The minimum risk factor works to counter-balance the staked amount on chain's exposure to various asset volatilities, and have base staking be 'resistant' to volatility."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Params",
                        "description": "Params holds parameters for the superfluid module"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryParamsResponse",
                    "definitions": {
                        "QueryParamsResponse": {
                            "properties": {
                                "params": {
                                    "$ref": "#/definitions/osmosis.superfluid.Params",
                                    "additionalProperties": true,
                                    "description": "params defines the parameters of the module."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Params Response"
                        },
                        "osmosis.superfluid.Params": {
                            "properties": {
                                "minimum_risk_factor": {
                                    "type": "string",
                                    "description": "minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for superfluid staking, default: 5%. The minimum risk factor works to counter-balance the staked amount on chain's exposure to various asset volatilities, and have base staking be 'resistant' to volatility."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Params",
                            "description": "Params holds parameters for the superfluid module"
                        }
                    }
                }
            },
            "QueryTotalDelegationByDelegatorRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryTotalDelegationByDelegatorRequest",
                "definitions": {
                    "QueryTotalDelegationByDelegatorRequest": {
                        "properties": {
                            "delegator_address": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Total Delegation By Delegator Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryTotalDelegationByDelegatorRequest",
                    "definitions": {
                        "QueryTotalDelegationByDelegatorRequest": {
                            "properties": {
                                "delegator_address": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Total Delegation By Delegator Request"
                        }
                    }
                }
            },
            "QueryTotalDelegationByDelegatorResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/QueryTotalDelegationByDelegatorResponse",
                "definitions": {
                    "QueryTotalDelegationByDelegatorResponse": {
                        "properties": {
                            "superfluid_delegation_records": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord"
                                },
                                "type": "array"
                            },
                            "delegation_response": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.staking.v1beta1.DelegationResponse"
                                },
                                "type": "array"
                            },
                            "total_delegated_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            },
                            "total_equivalent_staked_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Query Total Delegation By Delegator Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "cosmos.staking.v1beta1.Delegation": {
                        "properties": {
                            "delegator_address": {
                                "type": "string",
                                "description": "delegator_address is the bech32-encoded address of the delegator."
                            },
                            "validator_address": {
                                "type": "string",
                                "description": "validator_address is the bech32-encoded address of the validator."
                            },
                            "shares": {
                                "type": "string",
                                "description": "shares define the delegation shares received."
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Delegation",
                        "description": "Delegation represents the bond with tokens held by an account. It is owned by one delegator, and is associated with the voting power of one validator."
                    },
                    "cosmos.staking.v1beta1.DelegationResponse": {
                        "properties": {
                            "delegation": {
                                "$ref": "#/definitions/cosmos.staking.v1beta1.Delegation",
                                "additionalProperties": true
                            },
                            "balance": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Delegation Response",
                        "description": "DelegationResponse is equivalent to Delegation except that it contains a balance in addition to shares which is more suitable for client responses."
                    },
                    "osmosis.superfluid.SuperfluidDelegationRecord": {
                        "properties": {
                            "delegator_address": {
                                "type": "string"
                            },
                            "validator_address": {
                                "type": "string"
                            },
                            "delegation_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            },
                            "equivalent_staked_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegation Record",
                        "description": "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryTotalDelegationByDelegatorResponse",
                    "definitions": {
                        "QueryTotalDelegationByDelegatorResponse": {
                            "properties": {
                                "superfluid_delegation_records": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord"
                                    },
                                    "type": "array"
                                },
                                "delegation_response": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.staking.v1beta1.DelegationResponse"
                                    },
                                    "type": "array"
                                },
                                "total_delegated_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                },
                                "total_equivalent_staked_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Total Delegation By Delegator Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "cosmos.staking.v1beta1.Delegation": {
                            "properties": {
                                "delegator_address": {
                                    "type": "string",
                                    "description": "delegator_address is the bech32-encoded address of the delegator."
                                },
                                "validator_address": {
                                    "type": "string",
                                    "description": "validator_address is the bech32-encoded address of the validator."
                                },
                                "shares": {
                                    "type": "string",
                                    "description": "shares define the delegation shares received."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Delegation",
                            "description": "Delegation represents the bond with tokens held by an account. It is owned by one delegator, and is associated with the voting power of one validator."
                        },
                        "cosmos.staking.v1beta1.DelegationResponse": {
                            "properties": {
                                "delegation": {
                                    "$ref": "#/definitions/cosmos.staking.v1beta1.Delegation",
                                    "additionalProperties": true
                                },
                                "balance": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Delegation Response",
                            "description": "DelegationResponse is equivalent to Delegation except that it contains a balance in addition to shares which is more suitable for client responses."
                        },
                        "osmosis.superfluid.SuperfluidDelegationRecord": {
                            "properties": {
                                "delegator_address": {
                                    "type": "string"
                                },
                                "validator_address": {
                                    "type": "string"
                                },
                                "delegation_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                },
                                "equivalent_staked_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegation Record",
                            "description": "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form."
                        }
                    }
                }
            },
            "SuperfluidDelegationAmountRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SuperfluidDelegationAmountRequest",
                "definitions": {
                    "SuperfluidDelegationAmountRequest": {
                        "properties": {
                            "delegator_address": {
                                "type": "string"
                            },
                            "validator_address": {
                                "type": "string"
                            },
                            "denom": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegation Amount Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SuperfluidDelegationAmountRequest",
                    "definitions": {
                        "SuperfluidDelegationAmountRequest": {
                            "properties": {
                                "delegator_address": {
                                    "type": "string"
                                },
                                "validator_address": {
                                    "type": "string"
                                },
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegation Amount Request"
                        }
                    }
                }
            },
            "SuperfluidDelegationAmountResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SuperfluidDelegationAmountResponse",
                "definitions": {
                    "SuperfluidDelegationAmountResponse": {
                        "properties": {
                            "amount": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegation Amount Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SuperfluidDelegationAmountResponse",
                    "definitions": {
                        "SuperfluidDelegationAmountResponse": {
                            "properties": {
                                "amount": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegation Amount Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    }
                }
            },
            "SuperfluidDelegationsByDelegatorRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SuperfluidDelegationsByDelegatorRequest",
                "definitions": {
                    "SuperfluidDelegationsByDelegatorRequest": {
                        "properties": {
                            "delegator_address": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegations By Delegator Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SuperfluidDelegationsByDelegatorRequest",
                    "definitions": {
                        "SuperfluidDelegationsByDelegatorRequest": {
                            "properties": {
                                "delegator_address": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegations By Delegator Request"
                        }
                    }
                }
            },
            "SuperfluidDelegationsByDelegatorResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SuperfluidDelegationsByDelegatorResponse",
                "definitions": {
                    "SuperfluidDelegationsByDelegatorResponse": {
                        "properties": {
                            "superfluid_delegation_records": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord"
                                },
                                "type": "array"
                            },
                            "total_delegated_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            },
                            "total_equivalent_staked_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegations By Delegator Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.superfluid.SuperfluidDelegationRecord": {
                        "properties": {
                            "delegator_address": {
                                "type": "string"
                            },
                            "validator_address": {
                                "type": "string"
                            },
                            "delegation_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            },
                            "equivalent_staked_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegation Record",
                        "description": "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SuperfluidDelegationsByDelegatorResponse",
                    "definitions": {
                        "SuperfluidDelegationsByDelegatorResponse": {
                            "properties": {
                                "superfluid_delegation_records": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord"
                                    },
                                    "type": "array"
                                },
                                "total_delegated_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                },
                                "total_equivalent_staked_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegations By Delegator Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.superfluid.SuperfluidDelegationRecord": {
                            "properties": {
                                "delegator_address": {
                                    "type": "string"
                                },
                                "validator_address": {
                                    "type": "string"
                                },
                                "delegation_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                },
                                "equivalent_staked_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegation Record",
                            "description": "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form."
                        }
                    }
                }
            },
            "SuperfluidDelegationsByValidatorDenomRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SuperfluidDelegationsByValidatorDenomRequest",
                "definitions": {
                    "SuperfluidDelegationsByValidatorDenomRequest": {
                        "properties": {
                            "validator_address": {
                                "type": "string"
                            },
                            "denom": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegations By Validator Denom Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SuperfluidDelegationsByValidatorDenomRequest",
                    "definitions": {
                        "SuperfluidDelegationsByValidatorDenomRequest": {
                            "properties": {
                                "validator_address": {
                                    "type": "string"
                                },
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegations By Validator Denom Request"
                        }
                    }
                }
            },
            "SuperfluidDelegationsByValidatorDenomResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SuperfluidDelegationsByValidatorDenomResponse",
                "definitions": {
                    "SuperfluidDelegationsByValidatorDenomResponse": {
                        "properties": {
                            "superfluid_delegation_records": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegations By Validator Denom Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.superfluid.SuperfluidDelegationRecord": {
                        "properties": {
                            "delegator_address": {
                                "type": "string"
                            },
                            "validator_address": {
                                "type": "string"
                            },
                            "delegation_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            },
                            "equivalent_staked_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegation Record",
                        "description": "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SuperfluidDelegationsByValidatorDenomResponse",
                    "definitions": {
                        "SuperfluidDelegationsByValidatorDenomResponse": {
                            "properties": {
                                "superfluid_delegation_records": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegations By Validator Denom Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.superfluid.SuperfluidDelegationRecord": {
                            "properties": {
                                "delegator_address": {
                                    "type": "string"
                                },
                                "validator_address": {
                                    "type": "string"
                                },
                                "delegation_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                },
                                "equivalent_staked_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegation Record",
                            "description": "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form."
                        }
                    }
                }
            },
            "SuperfluidIntermediaryAccountInfo": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SuperfluidIntermediaryAccountInfo",
                "definitions": {
                    "SuperfluidIntermediaryAccountInfo": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "val_addr": {
                                "type": "string"
                            },
                            "gauge_id": {
                                "type": "string"
                            },
                            "address": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Intermediary Account Info"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SuperfluidIntermediaryAccountInfo",
                    "definitions": {
                        "SuperfluidIntermediaryAccountInfo": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "val_addr": {
                                    "type": "string"
                                },
                                "gauge_id": {
                                    "type": "string"
                                },
                                "address": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Intermediary Account Info"
                        }
                    }
                }
            },
            "SuperfluidUndelegationsByDelegatorRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SuperfluidUndelegationsByDelegatorRequest",
                "definitions": {
                    "SuperfluidUndelegationsByDelegatorRequest": {
                        "properties": {
                            "delegator_address": {
                                "type": "string"
                            },
                            "denom": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Undelegations By Delegator Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SuperfluidUndelegationsByDelegatorRequest",
                    "definitions": {
                        "SuperfluidUndelegationsByDelegatorRequest": {
                            "properties": {
                                "delegator_address": {
                                    "type": "string"
                                },
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Undelegations By Delegator Request"
                        }
                    }
                }
            },
            "SuperfluidUndelegationsByDelegatorResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/SuperfluidUndelegationsByDelegatorResponse",
                "definitions": {
                    "SuperfluidUndelegationsByDelegatorResponse": {
                        "properties": {
                            "superfluid_delegation_records": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord"
                                },
                                "type": "array"
                            },
                            "total_undelegated_coins": {
                                "items": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                },
                                "type": "array"
                            },
                            "synthetic_locks": {
                                "items": {
                                    "$ref": "#/definitions/osmosis.lockup.SyntheticLock"
                                },
                                "type": "array"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Undelegations By Delegator Response"
                    },
                    "cosmos.base.v1beta1.Coin": {
                        "properties": {
                            "denom": {
                                "type": "string"
                            },
                            "amount": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Coin",
                        "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                    },
                    "osmosis.lockup.SyntheticLock": {
                        "properties": {
                            "underlying_lock_id": {
                                "type": "string",
                                "description": "Underlying Lock ID is the underlying native lock's id for this synthetic lockup. A synthetic lock MUST have an underlying lock."
                            },
                            "synth_denom": {
                                "type": "string",
                                "description": "SynthDenom is the synthetic denom that is a combination of gamm share + bonding status + validator address."
                            },
                            "end_time": {
                                "type": "string",
                                "description": "used for unbonding synthetic lockups, for active synthetic lockups, this value is set to uninitialized value",
                                "format": "date-time"
                            },
                            "duration": {
                                "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                "type": "string",
                                "description": "Duration is the duration for a synthetic lock to mature at the point of unbonding has started.",
                                "format": "regex"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Synthetic Lock",
                        "description": "SyntheticLock is creating virtual lockup where new denom is combination of original denom and synthetic suffix. At the time of synthetic lockup creation and deletion, accumulation store is also being updated and on querier side, they can query as freely as native lockup."
                    },
                    "osmosis.superfluid.SuperfluidDelegationRecord": {
                        "properties": {
                            "delegator_address": {
                                "type": "string"
                            },
                            "validator_address": {
                                "type": "string"
                            },
                            "delegation_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            },
                            "equivalent_staked_amount": {
                                "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                "additionalProperties": true
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Superfluid Delegation Record",
                        "description": "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form."
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/SuperfluidUndelegationsByDelegatorResponse",
                    "definitions": {
                        "SuperfluidUndelegationsByDelegatorResponse": {
                            "properties": {
                                "superfluid_delegation_records": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.superfluid.SuperfluidDelegationRecord"
                                    },
                                    "type": "array"
                                },
                                "total_undelegated_coins": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                },
                                "synthetic_locks": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.lockup.SyntheticLock"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Undelegations By Delegator Response"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.lockup.SyntheticLock": {
                            "properties": {
                                "underlying_lock_id": {
                                    "type": "string",
                                    "description": "Underlying Lock ID is the underlying native lock's id for this synthetic lockup. A synthetic lock MUST have an underlying lock."
                                },
                                "synth_denom": {
                                    "type": "string",
                                    "description": "SynthDenom is the synthetic denom that is a combination of gamm share + bonding status + validator address."
                                },
                                "end_time": {
                                    "type": "string",
                                    "description": "used for unbonding synthetic lockups, for active synthetic lockups, this value is set to uninitialized value",
                                    "format": "date-time"
                                },
                                "duration": {
                                    "pattern": "^([0-9]+\\.?[0-9]*|\\.[0-9]+)s$",
                                    "type": "string",
                                    "description": "Duration is the duration for a synthetic lock to mature at the point of unbonding has started.",
                                    "format": "regex"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Synthetic Lock",
                            "description": "SyntheticLock is creating virtual lockup where new denom is combination of original denom and synthetic suffix. At the time of synthetic lockup creation and deletion, accumulation store is also being updated and on querier side, they can query as freely as native lockup."
                        },
                        "osmosis.superfluid.SuperfluidDelegationRecord": {
                            "properties": {
                                "delegator_address": {
                                    "type": "string"
                                },
                                "validator_address": {
                                    "type": "string"
                                },
                                "delegation_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                },
                                "equivalent_staked_amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Superfluid Delegation Record",
                            "description": "SuperfluidDelegationRecord is a struct used to indicate superfluid delegations of an account in the state machine in a user friendly form."
                        }
                    }
                }
            },
            "TotalSuperfluidDelegationsRequest": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/TotalSuperfluidDelegationsRequest",
                "definitions": {
                    "TotalSuperfluidDelegationsRequest": {
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Total Superfluid Delegations Request"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/TotalSuperfluidDelegationsRequest",
                    "definitions": {
                        "TotalSuperfluidDelegationsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Total Superfluid Delegations Request"
                        }
                    }
                }
            },
            "TotalSuperfluidDelegationsResponse": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "$ref": "#/definitions/TotalSuperfluidDelegationsResponse",
                "definitions": {
                    "TotalSuperfluidDelegationsResponse": {
                        "properties": {
                            "total_delegations": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": true,
                        "type": "object",
                        "title": "Total Superfluid Delegations Response"
                    }
                },
                "default": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/TotalSuperfluidDelegationsResponse",
                    "definitions": {
                        "TotalSuperfluidDelegationsResponse": {
                            "properties": {
                                "total_delegations": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Total Superfluid Delegations Response"
                        }
                    }
                }
            }
        },
        "tokenfactory": {
            "v1beta1": {
                "MsgBurn": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgBurn",
                    "definitions": {
                        "MsgBurn": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Burn",
                            "description": "MsgBurn is the sdk.Msg type for allowing an admin account to burn a token.  For now, we only support burning from the sender account."
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgBurn",
                        "definitions": {
                            "MsgBurn": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                        "additionalProperties": true
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Burn",
                                "description": "MsgBurn is the sdk.Msg type for allowing an admin account to burn a token.  For now, we only support burning from the sender account."
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "MsgBurnResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgBurnResponse",
                    "definitions": {
                        "MsgBurnResponse": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Burn Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgBurnResponse",
                        "definitions": {
                            "MsgBurnResponse": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Burn Response"
                            }
                        }
                    }
                },
                "MsgChangeAdmin": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgChangeAdmin",
                    "definitions": {
                        "MsgChangeAdmin": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "denom": {
                                    "type": "string"
                                },
                                "new_admin": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Change Admin",
                            "description": "MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign adminship of a denom to a new account"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgChangeAdmin",
                        "definitions": {
                            "MsgChangeAdmin": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "denom": {
                                        "type": "string"
                                    },
                                    "new_admin": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Change Admin",
                                "description": "MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign adminship of a denom to a new account"
                            }
                        }
                    }
                },
                "MsgChangeAdminResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgChangeAdminResponse",
                    "definitions": {
                        "MsgChangeAdminResponse": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Change Admin Response",
                            "description": "MsgChangeAdminResponse defines the response structure for an executed MsgChangeAdmin message."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgChangeAdminResponse",
                        "definitions": {
                            "MsgChangeAdminResponse": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Change Admin Response",
                                "description": "MsgChangeAdminResponse defines the response structure for an executed MsgChangeAdmin message."
                            }
                        }
                    }
                },
                "MsgCreateDenom": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgCreateDenom",
                    "definitions": {
                        "MsgCreateDenom": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "subdenom": {
                                    "type": "string",
                                    "description": "subdenom can be up to 44 \"alphanumeric\" characters long."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Create Denom",
                            "description": "MsgCreateDenom defines the message structure for the CreateDenom gRPC service method. It allows an account to create a new denom. It requires a sender address and a sub denomination. The (sender_address, sub_denomination) tuple must be unique and cannot be re-used. The resulting denom created is defined as <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is originally set to be the creator, but this can be changed later. The token denom does not indicate the current admin."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgCreateDenom",
                        "definitions": {
                            "MsgCreateDenom": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "subdenom": {
                                        "type": "string",
                                        "description": "subdenom can be up to 44 \"alphanumeric\" characters long."
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Create Denom",
                                "description": "MsgCreateDenom defines the message structure for the CreateDenom gRPC service method. It allows an account to create a new denom. It requires a sender address and a sub denomination. The (sender_address, sub_denomination) tuple must be unique and cannot be re-used. The resulting denom created is defined as <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is originally set to be the creator, but this can be changed later. The token denom does not indicate the current admin."
                            }
                        }
                    }
                },
                "MsgCreateDenomResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgCreateDenomResponse",
                    "definitions": {
                        "MsgCreateDenomResponse": {
                            "properties": {
                                "new_token_denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Create Denom Response",
                            "description": "MsgCreateDenomResponse is the return value of MsgCreateDenom It returns the full string of the newly created denom"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgCreateDenomResponse",
                        "definitions": {
                            "MsgCreateDenomResponse": {
                                "properties": {
                                    "new_token_denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Create Denom Response",
                                "description": "MsgCreateDenomResponse is the return value of MsgCreateDenom It returns the full string of the newly created denom"
                            }
                        }
                    }
                },
                "MsgMint": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgMint",
                    "definitions": {
                        "MsgMint": {
                            "properties": {
                                "sender": {
                                    "type": "string"
                                },
                                "amount": {
                                    "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Mint",
                            "description": "MsgMint is the sdk.Msg type for allowing an admin account to mint more of a token.  For now, we only support minting to the sender account"
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgMint",
                        "definitions": {
                            "MsgMint": {
                                "properties": {
                                    "sender": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin",
                                        "additionalProperties": true
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Mint",
                                "description": "MsgMint is the sdk.Msg type for allowing an admin account to mint more of a token.  For now, we only support minting to the sender account"
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            }
                        }
                    }
                },
                "MsgMintResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/MsgMintResponse",
                    "definitions": {
                        "MsgMintResponse": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Msg Mint Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/MsgMintResponse",
                        "definitions": {
                            "MsgMintResponse": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Msg Mint Response"
                            }
                        }
                    }
                },
                "QueryDenomAuthorityMetadataRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDenomAuthorityMetadataRequest",
                    "definitions": {
                        "QueryDenomAuthorityMetadataRequest": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Denom Authority Metadata Request",
                            "description": "QueryDenomAuthorityMetadataRequest defines the request structure for the DenomAuthorityMetadata gRPC query."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDenomAuthorityMetadataRequest",
                        "definitions": {
                            "QueryDenomAuthorityMetadataRequest": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Denom Authority Metadata Request",
                                "description": "QueryDenomAuthorityMetadataRequest defines the request structure for the DenomAuthorityMetadata gRPC query."
                            }
                        }
                    }
                },
                "QueryDenomAuthorityMetadataResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDenomAuthorityMetadataResponse",
                    "definitions": {
                        "QueryDenomAuthorityMetadataResponse": {
                            "properties": {
                                "authority_metadata": {
                                    "$ref": "#/definitions/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata",
                                    "additionalProperties": true
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Denom Authority Metadata Response",
                            "description": "QueryDenomAuthorityMetadataResponse defines the response structure for the DenomAuthorityMetadata gRPC query."
                        },
                        "osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata": {
                            "properties": {
                                "admin": {
                                    "type": "string",
                                    "description": "Can be empty for no admin, or a valid osmosis address"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Denom Authority Metadata",
                            "description": "DenomAuthorityMetadata specifies metadata for addresses that have specific capabilities over a token factory denom. Right now there is only one Admin permission, but is planned to be extended to the future."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDenomAuthorityMetadataResponse",
                        "definitions": {
                            "QueryDenomAuthorityMetadataResponse": {
                                "properties": {
                                    "authority_metadata": {
                                        "$ref": "#/definitions/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata",
                                        "additionalProperties": true
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Denom Authority Metadata Response",
                                "description": "QueryDenomAuthorityMetadataResponse defines the response structure for the DenomAuthorityMetadata gRPC query."
                            },
                            "osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata": {
                                "properties": {
                                    "admin": {
                                        "type": "string",
                                        "description": "Can be empty for no admin, or a valid osmosis address"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Denom Authority Metadata",
                                "description": "DenomAuthorityMetadata specifies metadata for addresses that have specific capabilities over a token factory denom. Right now there is only one Admin permission, but is planned to be extended to the future."
                            }
                        }
                    }
                },
                "QueryDenomsFromCreatorRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDenomsFromCreatorRequest",
                    "definitions": {
                        "QueryDenomsFromCreatorRequest": {
                            "properties": {
                                "creator": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Denoms From Creator Request",
                            "description": "QueryDenomsFromCreatorRequest defines the request structure for the DenomsFromCreator gRPC query."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDenomsFromCreatorRequest",
                        "definitions": {
                            "QueryDenomsFromCreatorRequest": {
                                "properties": {
                                    "creator": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Denoms From Creator Request",
                                "description": "QueryDenomsFromCreatorRequest defines the request structure for the DenomsFromCreator gRPC query."
                            }
                        }
                    }
                },
                "QueryDenomsFromCreatorResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDenomsFromCreatorResponse",
                    "definitions": {
                        "QueryDenomsFromCreatorResponse": {
                            "properties": {
                                "denoms": {
                                    "items": {
                                        "type": "string"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Denoms From Creator Response",
                            "description": "QueryDenomsFromCreatorRequest defines the response structure for the DenomsFromCreator gRPC query."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDenomsFromCreatorResponse",
                        "definitions": {
                            "QueryDenomsFromCreatorResponse": {
                                "properties": {
                                    "denoms": {
                                        "items": {
                                            "type": "string"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Denoms From Creator Response",
                                "description": "QueryDenomsFromCreatorRequest defines the response structure for the DenomsFromCreator gRPC query."
                            }
                        }
                    }
                },
                "QueryParamsRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryParamsRequest",
                    "definitions": {
                        "QueryParamsRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Params Request",
                            "description": "QueryParamsRequest is the request type for the Query/Params RPC method."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryParamsRequest",
                        "definitions": {
                            "QueryParamsRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Params Request",
                                "description": "QueryParamsRequest is the request type for the Query/Params RPC method."
                            }
                        }
                    }
                },
                "QueryParamsResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryParamsResponse",
                    "definitions": {
                        "QueryParamsResponse": {
                            "properties": {
                                "params": {
                                    "$ref": "#/definitions/osmosis.tokenfactory.v1beta1.Params",
                                    "additionalProperties": true,
                                    "description": "params defines the parameters of the module."
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Params Response",
                            "description": "QueryParamsResponse is the response type for the Query/Params RPC method."
                        },
                        "cosmos.base.v1beta1.Coin": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Coin",
                            "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                        },
                        "osmosis.tokenfactory.v1beta1.Params": {
                            "properties": {
                                "denom_creation_fee": {
                                    "items": {
                                        "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Params",
                            "description": "Params defines the parameters for the tokenfactory module."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryParamsResponse",
                        "definitions": {
                            "QueryParamsResponse": {
                                "properties": {
                                    "params": {
                                        "$ref": "#/definitions/osmosis.tokenfactory.v1beta1.Params",
                                        "additionalProperties": true,
                                        "description": "params defines the parameters of the module."
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Params Response",
                                "description": "QueryParamsResponse is the response type for the Query/Params RPC method."
                            },
                            "cosmos.base.v1beta1.Coin": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "amount": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Coin",
                                "description": "Coin defines a token with a denomination and an amount. NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto."
                            },
                            "osmosis.tokenfactory.v1beta1.Params": {
                                "properties": {
                                    "denom_creation_fee": {
                                        "items": {
                                            "$ref": "#/definitions/cosmos.base.v1beta1.Coin"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Params",
                                "description": "Params defines the parameters for the tokenfactory module."
                            }
                        }
                    }
                }
            }
        },
        "txfees": {
            "v1beta1": {
                "QueryBaseDenomRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryBaseDenomRequest",
                    "definitions": {
                        "QueryBaseDenomRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Base Denom Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryBaseDenomRequest",
                        "definitions": {
                            "QueryBaseDenomRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Base Denom Request"
                            }
                        }
                    }
                },
                "QueryBaseDenomResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryBaseDenomResponse",
                    "definitions": {
                        "QueryBaseDenomResponse": {
                            "properties": {
                                "base_denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Base Denom Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryBaseDenomResponse",
                        "definitions": {
                            "QueryBaseDenomResponse": {
                                "properties": {
                                    "base_denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Base Denom Response"
                            }
                        }
                    }
                },
                "QueryDenomPoolIdRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDenomPoolIdRequest",
                    "definitions": {
                        "QueryDenomPoolIdRequest": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Denom Pool Id Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDenomPoolIdRequest",
                        "definitions": {
                            "QueryDenomPoolIdRequest": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Denom Pool Id Request"
                            }
                        }
                    }
                },
                "QueryDenomPoolIdResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDenomPoolIdResponse",
                    "definitions": {
                        "QueryDenomPoolIdResponse": {
                            "properties": {
                                "poolID": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Denom Pool Id Response"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDenomPoolIdResponse",
                        "definitions": {
                            "QueryDenomPoolIdResponse": {
                                "properties": {
                                    "poolID": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Denom Pool Id Response"
                            }
                        }
                    }
                },
                "QueryDenomSpotPriceRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDenomSpotPriceRequest",
                    "definitions": {
                        "QueryDenomSpotPriceRequest": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Denom Spot Price Request",
                            "description": "QueryDenomSpotPriceRequest defines grpc request structure for querying spot price for the specified tx fee denom"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDenomSpotPriceRequest",
                        "definitions": {
                            "QueryDenomSpotPriceRequest": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Denom Spot Price Request",
                                "description": "QueryDenomSpotPriceRequest defines grpc request structure for querying spot price for the specified tx fee denom"
                            }
                        }
                    }
                },
                "QueryDenomSpotPriceResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryDenomSpotPriceResponse",
                    "definitions": {
                        "QueryDenomSpotPriceResponse": {
                            "properties": {
                                "poolID": {
                                    "type": "string"
                                },
                                "spot_price": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Denom Spot Price Response",
                            "description": "QueryDenomSpotPriceRequest defines grpc response structure for querying spot price for the specified tx fee denom"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryDenomSpotPriceResponse",
                        "definitions": {
                            "QueryDenomSpotPriceResponse": {
                                "properties": {
                                    "poolID": {
                                        "type": "string"
                                    },
                                    "spot_price": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Denom Spot Price Response",
                                "description": "QueryDenomSpotPriceRequest defines grpc response structure for querying spot price for the specified tx fee denom"
                            }
                        }
                    }
                },
                "QueryFeeTokensRequest": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryFeeTokensRequest",
                    "definitions": {
                        "QueryFeeTokensRequest": {
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Fee Tokens Request"
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryFeeTokensRequest",
                        "definitions": {
                            "QueryFeeTokensRequest": {
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Fee Tokens Request"
                            }
                        }
                    }
                },
                "QueryFeeTokensResponse": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "$ref": "#/definitions/QueryFeeTokensResponse",
                    "definitions": {
                        "QueryFeeTokensResponse": {
                            "properties": {
                                "fee_tokens": {
                                    "items": {
                                        "$ref": "#/definitions/osmosis.txfees.v1beta1.FeeToken"
                                    },
                                    "type": "array"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Query Fee Tokens Response"
                        },
                        "osmosis.txfees.v1beta1.FeeToken": {
                            "properties": {
                                "denom": {
                                    "type": "string"
                                },
                                "poolID": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": true,
                            "type": "object",
                            "title": "Fee Token",
                            "description": "FeeToken is a struct that specifies a coin denom, and pool ID pair. This marks the token as eligible for use as a tx fee asset in Osmosis. Its price in osmo is derived through looking at the provided pool ID. The pool ID must have osmo as one of its assets."
                        }
                    },
                    "default": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "$ref": "#/definitions/QueryFeeTokensResponse",
                        "definitions": {
                            "QueryFeeTokensResponse": {
                                "properties": {
                                    "fee_tokens": {
                                        "items": {
                                            "$ref": "#/definitions/osmosis.txfees.v1beta1.FeeToken"
                                        },
                                        "type": "array"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Query Fee Tokens Response"
                            },
                            "osmosis.txfees.v1beta1.FeeToken": {
                                "properties": {
                                    "denom": {
                                        "type": "string"
                                    },
                                    "poolID": {
                                        "type": "string"
                                    }
                                },
                                "additionalProperties": true,
                                "type": "object",
                                "title": "Fee Token",
                                "description": "FeeToken is a struct that specifies a coin denom, and pool ID pair. This marks the token as eligible for use as a tx fee asset in Osmosis. Its price in osmo is derived through looking at the provided pool ID. The pool ID must have osmo as one of its assets."
                            }
                        }
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=index.js.map