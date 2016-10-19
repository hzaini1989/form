;(function(window,$){

    // var num1,num2,num3,num4;  // 页面刷新的时候存的storage
    var Union_config ={

        // 银行境外卡
        create:function(){
            'use strict';

            var Union_config = {
                init:function(){
                    // this.chooseUnion();
                    // this.submitIn();
                },
                chooseUnion:function(){  // 默认用户同意协议
                    var $parent =$('.union-argee'),$target =$parent.find('.choose b');
                    $target.click(function(){
                        var $this=$(this);
                        return $this.hasClass('icon-right-9') ? $this.removeClass('icon-right-9') : $this.addClass('icon-right-9');
                    });                  
                },
                submit:function(){     // 表单验证 
                    $('.unionpay-all .union-sure').click(function(){ 
                        var _parent=$('.union-form'),
                            _xPinyin=_parent.find('.firstName').val(),
                            _mPinyin=_parent.find('.lastName').val(),
                            _phone=_parent.find('.phone').val(),
                            _mail=_parent.find('.email').val(),
                            _checkRecommend=_parent.find('.ecommendationCode').val(),
                            // _checkedBox=_parent.find('.choose b').hasClass('icon-right-9'),
                            pinyin=/^[A-Za-z]+$/,
                            phone=/^\d{1}|\d{15}$/,   //  new RegExp(/^1[3|4|5|7|8]\d{9}$/)
                            mail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                            checkRecommend=/^\d{0,10}$/;
                        if(_xPinyin===''){
                            $('.union-form .firstName').val('').attr('placeholder','请输入正确的姓名').addClass('colorRed');
                            alert('请输入正确的姓名');
                        }else if(!(pinyin.test(_xPinyin))){
                            $('.union-form .firstName').val('').attr('placeholder','请输入正确的姓名').addClass('colorRed');
                            alert('请输入正确的姓名');
                        }else if(_mPinyin===''){
                            $('.union-form .lastName').val('').attr('placeholder','请输入正确的姓名').addClass('colorRed');
                            alert('请输入正确的姓名');
                        }else if(!(pinyin.test(_mPinyin))){
                            $('.union-form .lastName').val('').attr('placeholder','请输入正确的姓名').addClass('colorRed');
                            alert('请输入正确的姓名');
                        }else if(_phone===''){
                            $('.union-form .phone').val('').attr('placeholder','请输入正确的手机号码').addClass('colorRed');
                            alert('请输入正确的手机号码');
                        }else if(!(phone.test(_phone))){
                            $('.union-form .phone').val('').attr('placeholder','请输入正确的手机号码').addClass('colorRed');
                            alert('请输入正确的手机号码');
                        }else if(_mail===''){
                            $('.union-form .email').val('').attr('placeholder','请输入正确的邮箱地址').addClass('colorRed');
                            alert('请输入正确的邮箱地址');
                        }else if(!(mail.test(_mail))){
                            $('.union-form .email').val('').attr('placeholder','请输入正确的邮箱地址').addClass('colorRed');
                            alert('请输入正确的邮箱地址');
                        }else if(!(checkRecommend.test(_checkRecommend))){
                            $('.union-form .ecommendationCode').val('').attr('placeholder','请输入正确的推荐码').addClass('colorRed');
                            alert('请输入正确的推荐码');
                        }else if(!$('.choose b').hasClass('icon-right-9')){
                            alert('请同意协议之后再提交,谢谢');
                        }

                        // 信息都正确，可以提交表单
                        if(!(_xPinyin ==='') && (pinyin.test(_xPinyin)) && !(_mPinyin=== '') && (pinyin.test(_mPinyin)) && !(_phone ==='') && (phone.test(_phone)) && !(_mail === '') && (mail.test(_mail)) && (checkRecommend.test(_checkRecommend)) && $('.choose b').hasClass('icon-right-9')) {
                            //  TO DO 。。。

                        }
                    });
                },
                backRusult:function(){   //  银联返回点结果判断 －－－
                    var array = ['00','01','02','03','80','98'];  // 参数一一对应如下
                    var result='98';

                    var $success=$('.union-result .success'),$fail=$('.union-result .fail'),$h4=$('.union-result .union-bg h4'),$p=$('.union-result .union-bg p');
                    
                    switch (result){
                        case '00':
                            $success.show();
                            $fail.hide();
                            $h4.show();
                            $p.html('符合活动奖励条件的众信客户将在活动结束后30个工昨日内收到我们发送的购物卡，感谢您的支持');
                            break;
                        case '01':
                            $success.hide();
                            $fail.show();
                            $h4.hide();
                            $p.html('信息录入失败，服务器不可用');
                            break;
                        case '02':
                            $success.hide();
                            $fail.show();
                            $h4.hide();
                            $p.html('信息录入失败，参数数量错误');
                            break;
                        case '03':
                            $success.hide();
                            $fail.show();
                            $h4.hide();
                            $p.html('信息录入失败，参数内容错误');
                            break; 
                        case '80':
                            $success.hide();
                            $fail.show();
                            $h4.hide();
                            $p.html('服务器内部错误');
                            break; 
                        case '98':
                            $success.hide();
                            $fail.show();
                            $h4.hide();
                            $p.html('请求超时');
                            break;               
                    };

                }
            };

            return Union_config;
        }  
    };

    var myUnion = Union_config.create();
    myUnion.chooseUnion();
    myUnion.submit();
    myUnion.backRusult();






})(window,jQuery);