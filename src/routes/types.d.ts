import { Player } from "../screens/player/types";
import { Team } from "../screens/team/types";

export type NavigationStackParam = {
    Home: undefined;
    Team: { team: Team };
    Player: { player: Player }
}