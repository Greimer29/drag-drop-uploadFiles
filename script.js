input = document.querySelectorAll('.drop-zone__input').forEach(inputElement => {
    const dropZoneElement = inputElement.closest('.drop-zone');

    dropZoneElement.addEventListener('click', e => {
        inputElement.click();
    });

    dropZoneElement.addEventListener('change', e => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    })

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

/**Update thubnail Element
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = document.querySelector('.drop-zone__thumb');

    //firts time theres not element, so lets create
    if (!thumbnailElement) {
        thumbnailElement = document.createElement('div');
        thumbnailElement.classList.add('drop-zone__thumb')
        dropZoneElement.appendChild(thumbnailElement);
    }

    //firts time remove the promt
    if (dropZoneElement.querySelector('.drop-zone__prompt')) {
        dropZoneElement.querySelector('.drop-zone__prompt').remove();
    }
    thumbnailElement.dataset.label = file.name;

    //show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `URL('${reader.result}')`;
        }
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
    console.log(file)
}