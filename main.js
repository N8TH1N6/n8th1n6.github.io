function ShowAndHide() {
  var x = document.getElementById('discord');
  var y = document.getElementById('github');
  var z = document.getElementById('aboutme');
  var w = document.getElementById('aboutmetext')
  if (x.style.display == 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
  if (y.style.display == 'none') {
    y.style.display = 'block';
  } else {
    y.style.display = 'none';
  }
  if (z.style.display == 'none') {
    z.style.display = 'block';
  } else {
    z.style.display = 'none';
  }
  if (w.style.display == 'none') {
    w.style.display = 'none';
  } else {
    w.style.display = 'none';
  }
}

function ShowAndHideAboutMe() {
  var x = document.getElementById('aboutmetext');
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
