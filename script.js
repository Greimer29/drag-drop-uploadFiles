input = document.querySelectorAll('.drop-zone__input').forEach(inputElement => {
    const dropZoneElement = inputElement.closest('.drop-zone');

    dropZoneElement.addEventListener('dragover', e => {
        dropZoneElement.classList.add('drop-zone--over');
    });
});