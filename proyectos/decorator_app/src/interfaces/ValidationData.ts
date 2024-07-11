export default interface ValidationData {
    [className: string]: {
        [propName: string]: string[];
    };
}