const Modal = {
    open(){
        //Open modal
        //ADD class active to modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        //Close MODAL
        //remove class active to modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}