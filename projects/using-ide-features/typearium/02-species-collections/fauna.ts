import { getMammals, MammalsSettings } from "./fauna/mammals";
import { getReptiles, ReptilesSettings } from "./fauna/reptiles";

export interface FaunaSettings {
	mammals?: MammalsSettings;
	reptiles?: ReptilesSettings;
}
export function getFauna(settings?: FaunaSettings) {
	return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)];
}
