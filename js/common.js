$(document).ready(function() {

//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	//плавный скролл
	$(".navigat li a").mPageScroll2id();

	$(".btn-header").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	}); 

	$(".btn-header_search").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".btn-header_menu").removeClass("active");
		$(".form-search").slideToggle(200);
	});

	$(".btn-header_menu").click(function() {
		$(".form-search").slideUp(200);
		$(".btn-header_search").removeClass("active");
		$(".menu-mobile").slideToggle(200);
	});

	{
		if ($(window).width() < 1200) { 
			$(".sidebar-block__title").click(function() {
				$(this).toggleClass("active");
				$(this).siblings(".sidebar-block__content").slideToggle(200);
			});
		}
	}

	$(".item-filter__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-filter").removeClass("active");
		$(this).parent().siblings(".item-filter").find(".item-filter__content").slideUp(200);
	});

	//слайдер
	$('.slider-card').slick({
		arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 1000,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" transform="matrix(-1 0 0 1 24.5 0)" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2C6.986 2 2.5 6.486 2.5 12C2.5 17.514 6.986 22 12.5 22C18.014 22 22.5 17.514 22.5 12C22.5 6.486 18.014 2 12.5 2ZM12.5 3.5C17.187 3.5 21 7.313 21 12C21 16.687 17.187 20.5 12.5 20.5C7.813 20.5 4 16.687 4 12C4 7.313 7.813 3.5 12.5 3.5ZM13.4124 7.9977L9.9264 11.4687C9.7854 11.6097 9.7064 11.8007 9.7064 11.9997C9.7064 12.1997 9.7854 12.3907 9.9264 12.5317L13.4124 16.0017C13.5584 16.1477 13.7504 16.2207 13.9414 16.2207C14.1334 16.2207 14.3264 16.1477 14.4724 15.9997C14.7644 15.7057 14.7634 15.2317 14.4704 14.9397L11.5184 11.9997L14.4704 9.0607C14.7634 8.7687 14.7644 8.2937 14.4724 7.9997C14.1804 7.7047 13.7064 7.7067 13.4124 7.9977Z" fill="#C0A3FA"/></svg><div/>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" width="24" height="24" rx="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2C18.014 2 22.5 6.486 22.5 12C22.5 17.514 18.014 22 12.5 22C6.986 22 2.5 17.514 2.5 12C2.5 6.486 6.986 2 12.5 2ZM12.5 3.5C7.813 3.5 4 7.313 4 12C4 16.687 7.813 20.5 12.5 20.5C17.187 20.5 21 16.687 21 12C21 7.313 17.187 3.5 12.5 3.5ZM11.5876 7.9977L15.0736 11.4687C15.2146 11.6097 15.2936 11.8007 15.2936 11.9997C15.2936 12.1997 15.2146 12.3907 15.0736 12.5317L11.5876 16.0017C11.4416 16.1477 11.2496 16.2207 11.0586 16.2207C10.8666 16.2207 10.6736 16.1477 10.5276 15.9997C10.2356 15.7057 10.2366 15.2317 10.5296 14.9397L13.4816 11.9997L10.5296 9.0607C10.2366 8.7687 10.2356 8.2937 10.5276 7.9997C10.8196 7.7047 11.2936 7.7067 11.5876 7.9977Z" fill="#FD3E6C"/></svg><div/>',
        infinite: true,
        responsive: [
		{
			breakpoint: 590,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();

});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

