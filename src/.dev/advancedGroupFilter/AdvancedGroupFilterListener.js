class AdvancedGroupFilterListener {
    constructor () {
        this.displayBox = document.getElementById('advanced-group-filter')
        this.newConditionButton = document.getElementById('advanced-filter-add-condition-button')
        this.cancelBtn = document.getElementById('advanced-filter-cancel-button')
        this.applyFiltersBtn = document.getElementById('advanced-filter-apply-button')
    }

    assignListeners() {
        // this.newConditionButton.addEventListener('click', this._addCondition())
        this.cancelBtn.addEventListener('click', () => this._cancelFilters())
        this.applyFiltersBtn.addEventListener('click', () => this._applyFilters())
    }

    // _addCondition() {
    // }

    _cancelFilters() {
        this.displayBox.style.display = 'none'
    }

    _applyFilters() {
        this.displayBox.style.display = 'none'
    }
}

module.exports = AdvancedGroupFilterListener