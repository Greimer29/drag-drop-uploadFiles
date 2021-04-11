input = document.querySelectorAll('.drop-zone__input').forEach(inputElement => {
    const dropZoneElement = inputElement.closest('.drop-zone');

    dropZoneElement.addEventListener('dragover', e => {
        e.preventDefault();
        dropZoneElement.classList.add('drop-zone--over');

        ['draend', 'dragleave'].forEach(type => {
            dropZoneElement.addEventListener(type, e => {
                dropZoneElement.classList.remove('drop-zone--over');
            });
        });
    });
});