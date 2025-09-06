
import pkg from '../../package.json' assert { type: 'json' };
type ToggleValue = boolean;

class ToggleService {
    private toggles : Record<string, ToggleValue> = {};

    constructor(initialToggles: Record<string, ToggleValue>) {
        this.toggles = initialToggles;
    }

    setToggle(name: string, value: ToggleValue) {
        this.toggles[name] = value;
    }
    
    getToggle(name: string): Boolean {
        let toggles: Record<string, boolean> =  pkg.toggles
        return toggles[name] || false;
    }

    isEnabled(name: string): Boolean {
        return this.getToggle(name);
    }
}

export const toggle = new ToggleService({});
