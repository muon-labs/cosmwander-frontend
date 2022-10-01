import * as _104 from "./epochs/genesis";
import * as _105 from "./epochs/query";
import * as _106 from "./gamm/pool-models/balancer/balancerPool";
import * as _107 from "./gamm/v1beta1/genesis";
import * as _108 from "./gamm/v1beta1/query";
import * as _109 from "./gamm/v1beta1/tx";
import * as _110 from "./gamm/pool-models/balancer/tx";
import * as _111 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _112 from "./gamm/pool-models/stableswap/tx";
import * as _113 from "./incentives/gauge";
import * as _114 from "./incentives/genesis";
import * as _115 from "./incentives/params";
import * as _116 from "./incentives/query";
import * as _117 from "./incentives/tx";
import * as _118 from "./lockup/genesis";
import * as _119 from "./lockup/lock";
import * as _120 from "./lockup/query";
import * as _121 from "./lockup/tx";
import * as _122 from "./mint/v1beta1/genesis";
import * as _123 from "./mint/v1beta1/mint";
import * as _124 from "./mint/v1beta1/query";
import * as _125 from "./pool-incentives/v1beta1/genesis";
import * as _126 from "./pool-incentives/v1beta1/gov";
import * as _127 from "./pool-incentives/v1beta1/incentives";
import * as _128 from "./pool-incentives/v1beta1/query";
import * as _129 from "./store/v1beta1/tree";
import * as _130 from "./superfluid/genesis";
import * as _131 from "./superfluid/params";
import * as _132 from "./superfluid/query";
import * as _133 from "./superfluid/superfluid";
import * as _134 from "./superfluid/tx";
import * as _135 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _136 from "./tokenfactory/v1beta1/genesis";
import * as _137 from "./tokenfactory/v1beta1/params";
import * as _138 from "./tokenfactory/v1beta1/query";
import * as _139 from "./tokenfactory/v1beta1/tx";
import * as _140 from "./txfees/v1beta1/feetoken";
import * as _141 from "./txfees/v1beta1/genesis";
import * as _142 from "./txfees/v1beta1/gov";
import * as _143 from "./txfees/v1beta1/query";
import * as _230 from "./gamm/pool-models/balancer/tx.amino";
import * as _231 from "./gamm/pool-models/stableswap/tx.amino";
import * as _232 from "./gamm/v1beta1/tx.amino";
import * as _233 from "./incentives/tx.amino";
import * as _234 from "./lockup/tx.amino";
import * as _235 from "./superfluid/tx.amino";
import * as _236 from "./tokenfactory/v1beta1/tx.amino";
import * as _237 from "./gamm/pool-models/balancer/tx.registry";
import * as _238 from "./gamm/pool-models/stableswap/tx.registry";
import * as _239 from "./gamm/v1beta1/tx.registry";
import * as _240 from "./incentives/tx.registry";
import * as _241 from "./lockup/tx.registry";
import * as _242 from "./superfluid/tx.registry";
import * as _243 from "./tokenfactory/v1beta1/tx.registry";
import * as _244 from "./epochs/query.lcd";
import * as _245 from "./gamm/v1beta1/query.lcd";
import * as _246 from "./incentives/query.lcd";
import * as _247 from "./lockup/query.lcd";
import * as _248 from "./mint/v1beta1/query.lcd";
import * as _249 from "./pool-incentives/v1beta1/query.lcd";
import * as _250 from "./superfluid/query.lcd";
import * as _251 from "./tokenfactory/v1beta1/query.lcd";
import * as _252 from "./txfees/v1beta1/query.lcd";
import * as _253 from "./epochs/query.rpc.query";
import * as _254 from "./gamm/v1beta1/query.rpc.query";
import * as _255 from "./incentives/query.rpc.query";
import * as _256 from "./lockup/query.rpc.query";
import * as _257 from "./mint/v1beta1/query.rpc.query";
import * as _258 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _259 from "./superfluid/query.rpc.query";
import * as _260 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _261 from "./txfees/v1beta1/query.rpc.query";
import * as _262 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _263 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _264 from "./gamm/v1beta1/tx.rpc.msg";
import * as _265 from "./incentives/tx.rpc.msg";
import * as _266 from "./lockup/tx.rpc.msg";
import * as _267 from "./superfluid/tx.rpc.msg";
import * as _268 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _272 from "./lcd";
import * as _273 from "./rpc.query";
import * as _274 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._104,
      ..._105,
      ..._244,
      ..._253
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._232,
      ..._239,
      ..._245,
      ..._254,
      ..._264
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._110,
          ..._230,
          ..._237,
          ..._262
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._111,
          ..._112,
          ..._231,
          ..._238,
          ..._263
        };
      }
    }
  }
  export const incentives = { ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._233,
    ..._240,
    ..._246,
    ..._255,
    ..._265
  };
  export const lockup = { ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._234,
    ..._241,
    ..._247,
    ..._256,
    ..._266
  };
  export namespace mint {
    export const v1beta1 = { ..._122,
      ..._123,
      ..._124,
      ..._248,
      ..._257
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._249,
      ..._258
    };
  }
  export namespace store {
    export const v1beta1 = { ..._129
    };
  }
  export const superfluid = { ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._235,
    ..._242,
    ..._250,
    ..._259,
    ..._267
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._236,
      ..._243,
      ..._251,
      ..._260,
      ..._268
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._252,
      ..._261
    };
  }
  export const ClientFactory = { ..._272,
    ..._273,
    ..._274
  };
}