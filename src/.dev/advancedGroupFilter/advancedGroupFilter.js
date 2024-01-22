let body = document.getElementsByTagName('body')[0];
let advancedGroupFilter = `
<link rel='stylesheet' href='https://mypreview.geotab.com/geotab/checkmate/main.css?skin=my_geotab'>

<style>
.geo-dialog{
    display: block;
    left:50%;
    top:50%;
}
</style>
<div id='advanced-group-filter' class='geo-dialog'>
    <div class='geo-dialog__header'>
        <div class='geo-dialog__title ellipsis'>Advanced Group Filter</div>
        <button class='geo-dialog__close-button'>
            <svg class='svgIcon'>
                <use xlink:href='#geo-cross-thin'></use>
            </svg>
        </button>
    </div>
    <div class='geo-dialog__content'>
        <div class='form advanced-groups-filter'>
            <div class='form__desc'>Create conditions below to filter the entire system.</div>
            <ul class='sections form__sections'>
                <li class='section form__section'>Test</li>
            </ul>
            <div class='form__add-section'>
                <button class='add-section__button geo-button geo-caption'>Add new condition</button>
            </div>
        </div>
    </div>
    <div class='geo-dialog__footer'>
        <button class='geo-button'>Cancel</button>
        <button class='geo-button geo-button--action'>Apply filters</button>
    </div>

</div>
`
body.innerHTML = advancedGroupFilter + body.innerHTML;