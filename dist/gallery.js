const handleGalleryEvent = (event) => {
  const $gallery = event.target.parentElement.parentElement;
  const $hero = $gallery.querySelector('.hero');
  $hero.src = event.target.src;
  if (event.target.classList.contains('vertical')) {
    $hero.classList.add('vertical')
  } else {
    $hero.classList.remove('vertical')
  }
  const $selected = $gallery.querySelector('.thumbnails img.selected');
  $selected.classList.remove('selected');
  event.target.classList.add('selected');
}

const appendGallery = ({ srcs, orientations, $previousElement }) => {
  if (srcs.length < 1) return;

  const $gallery = document.createElement('div');
  $gallery.classList.add('gallery');
  $previousElement.after($gallery);
  const $hero = document.createElement('img');
  $hero.classList.add('hero');
  $hero.src = srcs[0];
  if (orientations[0] === 'v') $hero.classList.add('vertical');
  $gallery.append($hero);
  const $thumbnails = document.createElement('div');
  $thumbnails.classList.add('thumbnails');
  $gallery.append($thumbnails);
  for (let i = 0; i < srcs.length; i++) {
    const $thumb = document.createElement('img');
    if (i === 0) $thumb.classList.add('selected');
    if (orientations[i] === 'v') $thumb.classList.add('vertical');
    $thumb.src = srcs[i];
    $thumb.addEventListener('click', handleGalleryEvent);
    $thumb.addEventListener('mouseover', handleGalleryEvent);
    $thumb.addEventListener('touchstart', handleGalleryEvent);
    $thumbnails.append($thumb);
  }

  return $gallery;
};

const Gallery = (srcs, orientations = '') => {
  appendGallery({ srcs, orientations, $previousElement: document.currentScript });
};
