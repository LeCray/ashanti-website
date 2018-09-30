import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back,Power1, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const videoEnter = (videoHome) => {

  	var video = new TimelineMax();

    video.addLabel("start", 1.5)
    .from(videoHome, 1.4, {
        opacity: 1,
        ease: Power1.easeInOut,
        x:"-100%"
    }, "start")    


}

export const videoColumns = (videoLeftCol,videoRightColContent,width,videoStill,videoLinkhome,videoLinkAbout,videoLinkWork,videoLink,videoLinkContact) => {
	

  	var tl = new TimelineMax();

    tl.addLabel("start", 2)
    .from(videoLeftCol, 2, {
        opacity: 0,
        ease: Power4.easeInOut,
        x:"-100%"
    }, "start")    
    .from(videoRightColContent, 2.5, {
        opacity: 0,
        ease: Power4.easeOut,		
        y:"30%",        
    }, "start+=1") 

    .from(videoStill, 2, {
    	x: -width/2, 
    	opacity: 0,   	
    	ease: Power2.easeOut
    }, "start+=.5")

    .staggerFrom([videoLinkhome,videoLinkAbout,videoLinkWork,videoLink,videoLinkContact], 2.5, {
    	y:50, opacity:0, ease:  Elastic.easeOut.config(1.2, 1)
    }, 0.3, "start+=.7")
}

