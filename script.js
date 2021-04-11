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

    dropZoneElement.addEventListener('drop', e => {
        e.preventDefault();

        // console.log(e.dataTransfer.files)

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove('drop-zone--over');
    })
});

function updateThumbnail(dropZoneElement, file) {
    console.log(dropZoneElement);
    console.log(file);
}