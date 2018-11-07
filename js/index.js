$(function ($) {

    $('#fullpage').fullpage({

        /*配置参数*/


        /*配置每一屏颜色*/
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],

        /*配置屏幕对齐方式，默认是垂直居中 true*/
        verticalCentered:false,

        /*是否显示项目导航*/
        navigation:true,

        /*屏幕滚动时间*/
        scrollingSpeed:1000,

        /*滚动到哪一屏，完全进入到此屏幕 */
        afterLoad:function (link,index) {
            $('.section').eq(index-1).addClass('now');
        },

        /*屏幕下滚*/
        onLeave:function (index,nextIndex,direction) {
          if (index==2 && nextIndex==3) {
              $('.section').eq(index-1).addClass('leaved');
          } else if (index==3 && nextIndex==4) {
              $('.section').eq(index-1).addClass('leaved');
          } else if (index==5 && nextIndex==6) {
              $('.section').eq(index-1).addClass('leaved');
              $('.section06 .box06').addClass('show');
          } else if (index==6 && nextIndex==7) {
              console.log(1);
              $('.start07').addClass('show');
              $('.text07').addClass('show');
              $('.start07 img').each(function (i,item) {
                  $(this).css('transition-delay',i*0.5+'s');
              })
          }
        },
        /*当组件完全加载好了*/
        afterRender:function () {
            $('.more').on('click',function () {
                /*向下一屏方法*/
                $.fn.fullpage.moveSectionDown();
            })
            $('.section04 .cart04').on('transitionend',function () {
                $('.section04 .address04').show().find('img:last').fadeIn(1000);
                $('.section04').addClass('show');
            })
            $('.section08').on('mousemove',function (e) {
                $(this).find('.hand08').css({
                    'left':e.clientX-180,
                    'top':e.clientY-380
                })
            }).find('.again').on('click',function () {
                /*1、加的now 类*/
                /*1、加的leaved 类*/
                /*1、加的show 类*/
                /*1、加的css 属性带有style*/
                /*1、加的jquery方法 属性带有style*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.content [style]').removeAttr('style');
                $('.content05 [style]').removeAttr('style');

                $.fn.fullpage.moveTo(1)
            })

        }

    });
})