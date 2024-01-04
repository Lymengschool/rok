export function changeTextColor(selectElement) {
    var selectedOption = selectElement.options[selectElement.selectedIndex];

    if (selectedOption.value !== "") {
        selectElement.style.color = '#F14040'; // Change text color to #112442
    } else {
        selectElement.style.color = '#112442'; // Reset to default text color
    }
}
