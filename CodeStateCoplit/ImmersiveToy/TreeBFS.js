let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.


  let result = [];

  let queue = [];


  queue.unshift(node)

  while (queue.length !== 0) {

    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      let curNode = queue.pop()

      result.push(curNode.value);

      for (let j = 0; j < curNode.children.length; j++) {

        queue.unshift(curNode.children[j]);


      }

    }



  }

  return result;

};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};


// let root = new Node(1);
// let rootChild1 = root.addChild(new Node(2));
// let rootChild2 = root.addChild(new Node(3));
// let leaf1 = rootChild1.addChild(new Node(4));
// let leaf2 = rootChild1.addChild(new Node(5));

const root = new Node(1);
root.addChild(new Node(2));
root.addChild(new Node(3));
root.addChild(new Node(4));
root.children[0].addChild(new Node(5));
root.children[0].addChild(new Node(6));
root.children[0].children[0].addChild(new Node(7));
root.children[0].children[1].addChild(new Node(8));
root.children[1].addChild(new Node(9));
root.children[1].addChild(new Node(10));
root.children[1].children[1].addChild(new Node(11));
root.children[1].children[1].addChild(new Node(12));
root.children[2].addChild(new Node(13))




let output = bfs(root);
console.log(output);