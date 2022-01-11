const cart =document.querySelector('.giohang-homepage');
const modal=document.querySelector('.modal');
const close_order=document.querySelector('.menu-close');
const modal_container= document.querySelector('.js-modal-menu');
const btn_thanhtoan= document.querySelector('.btn-thanhtoan');
const sub_notifications=document.querySelector('.notification-thanhtoan');
const sub_notifications2=document.querySelector('.modal_sub_noti')
const sub_notifications_thoat=document.querySelector('.sub-thoat')
const notification_pay=document.querySelector('.notification-pay')
const print_bill=document.querySelector('.print-bill')
cart.addEventListener('click', function(){
    modal.classList.add('open');
})
close_order.addEventListener('click', function(){
    modal.classList.remove('open');
})
modal.addEventListener('click', function(){
    modal.classList.remove('open');
})
modal_container.addEventListener('click', function(event){
    event.stopPropagation();
})
//====================event click nút thanh toán==========
print_bill.addEventListener('click', function(event){
    notification_pay.classList.add('open');
})
// ==================================================================
sub_notifications_thoat.addEventListener('click', function(event){
    sub_notifications.classList.remove('open');
})
sub_notifications.addEventListener('click', function(){
    sub_notifications.classList.remove('open');
})
btn_thanhtoan.addEventListener('click', function(event){
    sub_notifications.classList.add('open');
})
sub_notifications2.addEventListener('click', function(a){
    a.stopPropagation();
})