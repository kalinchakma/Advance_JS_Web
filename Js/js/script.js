var window = document.querySelector('.main-window');
var item = document.querySelector('.main-window p');

var tree = document.querySelector(".main-window .tree");

var p = item.innerHTML;

var my_arr = [56,56,90,89];
var txt=0;
my_arr["Name"] = "hunter";
my_arr["Age"] = 20;
my_arr["fullName"] = my_arr["Name"]+" "+my_arr["Age"];
my_arr.forEach(my_fun);
function my_fun(value,index,arry){
    txt = txt + value;
}

//item.innerHTML = "200";
//document.write("Hello Hunter");
function printVal() {
    var name = document.hunter.name.value;
    item.innerHTML = "Welcome " + name;
}

function printVal_2() {
    var arr = document.hunter.name.value;
    //    var num = 0;
    //    var start = 0;
    //    var res;
    //    for (var i = 0; i < ar.length; i++) {
    //
    //        if (checkChar(ar[i])) {
    //            console.log("We can't apply Math on char")
    //            return;
    //            break;
    //        } else if (checkNum(ar[i])) {
    //            continue;
    //        } else if (checkOp(ar[i])) {
    //            num = ar.slice(start, i);
    //            console.log(typeof Number(num));
    //            break;
    //        }
    //    }



    function rec(ar) {
        var num;
        var start = 0;
        var res;
        for (var i = 0; i < ar.length; i++) {

            if (checkChar(ar[i])) {
                console.log("We can't apply Math on char")
                return;
                break;
            } else if (checkNum(ar[i])) {
                continue;
            } else if (checkOp(ar[i] && i < ar.length - 1)) {
                if (typeOp == "plus") {
                    num = Number(ar.slice(start, i)) + rec(ar.slice(i + 1));
                } else if (typeOp == "minus") {
                    num = Number(ar.slice(start, i)) - rec(ar.slice(i + 1));
                } else if (typeOp == "dot") {
                    num = Number(ar.slice(start, i)) * rec(ar.slice(i + 1));
                } else if (typeOp == "div") {
                    num = Number(ar.slice(start, i)) / rec(ar.slice(i + 1));
                }

            } else if (i == ar.length - 1 && checkNum(ar[i])) {
                return Number(ar.slice(i))
            }
        }
        return num;
    }

    var ans = rec(arr);
    console.log(ans);


}
//check character
function checkChar(a) {
    var p = a.toLowerCase();
    var c = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < c.length; i++) {
        if (p == c[i]) {
            return true;
            break;
        }
    }
    return false;
}
//check number
function checkNum(a) {
    var n = "1234567890";
    for (var i = 0; i < n.length; i++) {
        if (a == n[i]) {
            return true;
            break;
        }
    }
    return false;
}
//check operator
function checkOp(a) {
    var op = "+-/*";
    for (var i = 0; i < op.length; i++) {
        if (a == op[i]) {
            return true;
            break;
        }
    }
    return false;
}
//Check operator type
function typeOp(a) {
    switch (a) {
        case "+":
            return "plus";
            break;
        case "-":
            return "minus";
            break;
        case "*":
            return "dot";
            break;
        case "/":
            return "div";
            break;
        default:
            return "none";

    }
}
//JS object
var my_ob = {
    "Name": "Hunter",
    "Age": 23,
    "District": "Rmt",
    "fullName": function (i, j) {
        return i * j;
    }
}
tree.innerHTML = my_ob.fullName(3, 3);
//=========================================//
//                Binary Tree              //
//                -----------              //
//                                         //
//                    100                  //
//               90         110            //
//            6      95 105      200       //
//                                         //
//=========================================//
//Binary tree
class Node {
    constructor(value, data = null) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.data = data;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
        this.length = 0;
    }
    //pushing value
    push(val, data = null) {
        var newNode = new Node(val, data);

        if (this.root === null) {
            this.root = newNode;
            this.length++;
            return this;
        } else {
            var root = this.root;
            while (true) {
                if (root.value == val && root.data == data) {
                    console.log("You can't push same node and data twice");
                    return this;
                } else if (root.value == val && root.data !== data) {
                    root.data = data;
                    return this;
                } else if (val < root.value) {
                    if (root.left === null) {
                        root.left = newNode;
                        this.length++;
                        return this;
                    } else {
                        root = root.left;
                    }
                } else if (val > root.value) {
                    if (root.right === null) {
                        root.right = newNode;
                        this.length++;
                        return this;
                    } else {
                        root = root.right;
                    }
                }
            }
        }
    }
    //find element in tree
    find(val) {
        if (this.root == null) return "no element here";
        var root = this.root,
            found = false;
        while (root && !found) {
            if (val < root.value) {
                root = root.left;
            } else if (val > root.value) {
                root = root.right;
            } else {
                found = true;
            }
        }

        if (!found) return null;
        else return root;
        

    }
    //Tree traversing Breath first search
    // *Create a Queue store the value of node visited
    // *place root node in queue
    // *loop as long as anything in the queue
    BFS(){
        var root = this.root,
            data = [],
            queue = [];
        queue.push(root);
        while(queue.length){
            root = queue.shift();
            data.push(root.value);
            if(root.left) queue.push(root.left);
            if(root.right) queue.push(root.right);
        }
        return data;
    }
    //Depth First search preorder
    DFSPreOrder(){
        var data = [],
            root = this.root;
        function tre(node){
            data.push(node.value);
            if(node.left) tre(node.left);
            if(node.right) tre(node.right);
        }
        tre(root);
        return data;
    }
    //DEPTH FIRST SEARCH POSTORDER
    DFSPostOrder(){
        var data = [];
        function tra(node){
            if(node.left) tra(node.left);
            if(node.right) tra(node.right);
            data.push(node.value);
        }
        tra(this.root);
        return data;
    }
    
    //DEPTH FIRST SEARCH POSTORDER
    DFSInOrder(){
        var data = [];
        function tra(node){
            if(node.left) tra(node.left);
            data.push(node.value);
            if(node.right) tra(node.right);
        }
        tra(this.root);
        return data;
    }
    
    



}



var op = new BinaryTree();
op.push(100);
op.push(90);
op.push(200);
op.push(6);
op.push(105);
op.push(210);
op.push(95);
//op.push(5);
//op.push(4);
//op.push(3);
//=======================================================================================//
//   binary heaps                                                                        //
//                                                                                       //
//   *heaps are another catagory of tree                                                 //
//                                                                                       //
//   *in Maxbinary heaps root/parent nodes always larger than child node                 //
//                                                                                       //
//                                                                                       //
//   * In minBinaryheaps root/parent nodes always smaller than child nodes               //
//=======================================================================================//




























