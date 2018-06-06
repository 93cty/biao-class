var age_element = document.querySelector('#age');

age_element.addEventListener('change', function () {
    var age = age_element.value;
    if (!age) {
        console.log(`年龄不能为空`)
    } else {
        console.log(`yo`)
    }
})
