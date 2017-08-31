import './body.html';
import './material.js';
BlazeLayout.setRoot('body');

let i = 0, j = 0;
Template.App_body.events({
    'click #btnSide'() {
        $('#sideBar').addClass('is-visible');
        $('.mdl-layout__obfuscator').addClass('is-visible');
    },
    'click .mdl-layout__obfuscator'() {
        $('#sideBar').removeClass('is-visible');
        $('.mdl-layout__obfuscator').removeClass('is-visible');
    },
    'click #btnSearch'() {
        if (i == 0) {
            $('.mdl-textfield').addClass('is-focused');
            i = 1;
        } else {
            $('.mdl-textfield').removeClass('is-focused');
            i = 0;
        }
    },
    'click #hdrbtn'() {
        if (j == 0) {
            $('#listMenu1').addClass('is-visible');
            $('#menuList1').css('clip', 'rect(0px 141.562px 160px 0px)')
            j = 1;
        } else {
            $('#listMenu1').removeClass('is-visible');
            $('#menuList1').css('clip', 'rect(0px 141.562px 0px 141.562px)')
            j = 0;
        }
    },
    'click #accbtn'() {
        if (j == 0) {
            $('#listMenu2').addClass('is-visible');
            $('#menuList2').css('clip', 'rect(0px 141.562px 160px 0px)')
            j = 1;
        } else {
            $('#listMenu2').removeClass('is-visible');
            $('#menuList2').css('clip', 'rect(0px 141.562px 0px 141.562px)')
            j = 0;
        }
    }
});
