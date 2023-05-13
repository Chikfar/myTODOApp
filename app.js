var field = document.getElementById("field")
function dltAll(elmnt){
    var myList = elmnt.parentNode.parentNode.childNodes[4]
    myList.remove()
}
function foo(){
    var myItem = document.createElement("li")
    var data =document.createTextNode(field.value)
    myItem.appendChild(data)
    var parents = document.getElementById("myList")
    parents.appendChild(myItem)
    myItem.setAttribute("class", "items")
    var addBtn = document.createElement("button")
    myItem.appendChild(addBtn)
    addBtn.setAttribute("class","addBtn")
    var Edit = document.createTextNode("Edit")
    addBtn.appendChild(Edit)
    addBtn.setAttribute("onclick","editfoo(this)")
    var dltBtn = document.createElement("button")
    myItem.appendChild(dltBtn)
    dltBtn.setAttribute("class","dltAllBtn")
    var Remove = document.createTextNode("Remove")
    dltBtn.appendChild(Remove)
    dltBtn.setAttribute("onclick","dltfoo(this)")
    field.value = ""


}
function editfoo(elmnt){
    var myItem = elmnt.parentNode
    console.log(elmnt.parentNode)
    var plcH = myItem.firstChild.nodeValue
    var EditV = prompt("Edit",plcH)
    myItem.firstChild.nodeValue = EditV
}
function dltfoo(elmnt){
    var myItem = elmnt.parentNode
    console.log(elmnt.parentNode)
    myItem.remove()
}

