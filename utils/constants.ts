import { Chain } from "../interfaces/chains";

export const BECH32_REGEX = /^(juno|osmo|stars)1([qpzry9x8gf2tvdw0s3jn54khce6mua7l]+)/;
export const CHAINS = {
  osmo: Chain.Osmosis,
  juno: Chain.Juno,
  stars: Chain.Stargaze,
};
