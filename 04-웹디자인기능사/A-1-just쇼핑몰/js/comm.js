// $(function(조건문){실행문})

// 준비 이벤트
$(function(){

    // tab
    // .tab 밑에 있는 .tit-tab을 클릭했을때
    // 방금 클릭한 .tit-tab의 엄마에게
    // .on 클래스 추가해줘
    $('.tab .tit-tab').click(function(event){
        // a태그 링크 값 없애기
        event.preventDefault();
        // .tab > section에 붙어 있는 on 클래스 삭제
        $('.tab > section').removeClass('on')
        $(this).parent().addClass('on')
    })

    // modal
    // 1. .sec-bnr를 클릭했을때...
    // 2. #modal을 보이게...
    $('.sec-bnr').click(function(){
        $('#modal').css('display', 'flex')
    })

    // 3. #modal button 클릭했을 때
    // 4. #modal을 안보이게...
    $('#modal button').click(function(){
        $('#modal').hide()
    })

    // slide
    let now = 1,
        width = 100

    // setInterval(function(){실행문},3000)  즉, 3초마다 실행
    setInterval(function(){

        //조건문
        // if(조건){참일 경우 실행문}else{거짓일 경우 실행문}
        // 첫번째 두번째 이미지 일 경우... 다음 이미지로 애니메이션
        // 마지막 이미지일 경우... 첫번째 이미지로 애니메이션
        if(now < 3){
            // 참일 경우
            // .slide > ul을 애니메이션(left : -1200px)
            $('.slide > ul').animate({
                left : (width * now * (-1)) + '%'
            })
        
            now = now + 1

        }else{
            // 거짓일 경우
            // 다시 첫번째 이미지로 애니메이션
            $('.slide > ul').animate({
                left :0
            })
            now = 1
        }

    },3000)

})