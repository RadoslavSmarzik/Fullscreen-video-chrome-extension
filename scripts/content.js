let fullscreen_mode = false

// funkcia, ktora nastavuje aby video zaberalo 100% priestoru
const enter_fullscreen_video_mode = () => {

  const video = document.querySelector("video")

  if (video == null){
    console.log("Na stranke nie je element Video (mozno je na stranke iframe)")
    return
  }

  video.style.width = "100%"
  video.style.height = "100%"
  video.style.position = "fixed"
  video.style.top = "0"
  video.style.left = "0"

  const parentDiv = video.parentNode

  const parentParentDiv = parentDiv.parentNode
  parentParentDiv.style.width = "100%"
  parentParentDiv.style.height = "100%"
  parentParentDiv.style.zIndex = 50000
  parentParentDiv.style.position = "fixed"
  parentParentDiv.style.top = "0"
  parentParentDiv.style.left = "0"

  parentParentDiv.requestFullscreen()
  fullscreen_mode = true

}

const close_fullscreen_video_mode = () => {

  const video = document.querySelector("video")
  if (video != null){
    video.style.position = "relative"
  
    const parentDiv = video.parentNode

    const parentParentDiv = parentDiv.parentNode
    parentParentDiv.style.zIndex = 0
    parentParentDiv.style.position = "relative"
  }

  if(document.fullscreenElement){
    document.exitFullscreen()
  }
  fullscreen_mode = false

}

console.log("ROZSIRENIE FUNGUJE");

// nabindovanie fullscreenu na tlacidlo "f"
document.onkeydown = (e) => {
  if (e.which == 70) {
    if (!fullscreen_mode){
      enter_fullscreen_video_mode()
    }
    else {
      close_fullscreen_video_mode()
    } 
  }
};