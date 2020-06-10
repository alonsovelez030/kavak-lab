export interface LayoutState {
    countries: Array<CountryEntity>;
    ui: UiLayout;
}

export interface CountryEntity {
    name: string;
    region: string;
    currencyCode: string;
}

export interface UiLayout {
    showModal?: boolean;
    currentViewAuth?: string;
}
