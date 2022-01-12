const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

  function changecolor(){
  var r=Math.floor(Math.random() * 256);
  var g=Math.floor(Math.random() * 256);
  var b=Math.floor(Math.random() * 256);
  var mycolor="rgb("+r+ ","+g+","+b+")";
  var mycolor1="rgb("+g+ ","+b+","+r+")";
  var mycolor2="rgb("+b+ ","+r+","+g+")";
  var mycolor3="rgb("+r+ ","+b+","+g+")";
  var mycolor4="rgb("+g+ ","+r+","+b+")";
  var mycolor5="rgb("+b+ ","+g+","+r+")";
  var mycolor6="rgb("+r+ ","+b+","+b+")";
  var mycolor7="rgb("+g+ ","+r+","+g+")";
  var mycolor8="rgb("+r+ ","+b+","+g+")";
  console.log(mycolor);
  document.getElementById("C").style.background=mycolor;
  // document.getElementById("Db").style.background=mycolor1;
  document.getElementById("D").style.background=mycolor2;
  // document.getElementById("E").style.background=mycolor3;
  document.getElementById("Eb").style.background=mycolor4;
  document.getElementById("F").style.background=mycolor3;
  // document.getElementById("Gb").style.background=mycolor2;
  document.getElementById("G").style.background=mycolor1;
  // document.getElementById("Ab").style.background=mycolor;
  document.getElementById("A").style.background=mycolor1;
  // document.getElementById("Bb").style.background=mycolor2;
  document.getElementById("B").style.background=mycolor3;
}
// If you also want to change the color of black keys then you can reapply the coomented lines to do so