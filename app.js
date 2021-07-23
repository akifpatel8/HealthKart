
console.log('hekki');
$('#genderid').hover(
    function() {
        $('#hk-header-wrapper > div > section.header-menu > div > div > div > ul > li:nth-child(3) > div > div').eq($(this).index()).show();
    }, function() {
        $('#hk-header-wrapper > div > section.header-menu > div > div > div > ul > li:nth-child(3) > div > div').eq($(this).index()).hide();
    });​
