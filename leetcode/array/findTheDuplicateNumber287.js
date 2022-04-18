/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 07:17:36 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 07:17:36 
 */

/**
 *  寻找重复数
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。
 * @param {number[]} nums
 * @return {number}
 */

//数组做哈希
var findDuplicate = function (nums) {
    const length = nums.length;
    const map = new Array(length).fill(0);
    let repeat = -1;
    for (let i = 0; i < length; i++) {
        map[nums[i]]++;
    }
    for (let j = 1; j < length; j++) {
        if (map[j] >= 2) {
            repeat = j;
            break;
        }

    }
    return repeat;
};
var findDuplicate = function (nums) {
    const length = nums.length;
    let copy = [...nums];
    copy.sort((a, b) => a - b);
    let repeat = -1;
    for (let i = 0; i < length; i++) {
        if (i > 0 && copy[i] == copy[i - 1]) {
            repeat = copy[i - 1];
            break;
        }
    }
    return repeat;
};

var findDuplicate = function (nums) {
    const length = nums.length;
    const map = new Array(length).fill(0);
    let repeat = -1;
    for (let i = 0; i < length; i++) {
        if (map[nums[i]] == 0) { //如果map的长度为length，这里改为map[nums[i]-1]
            map[nums[i]]++;
        } else {
            repeat = nums[i];
            break;
        }
    }
    return repeat;
};
//对象做哈希
var findDuplicate = function (nums) {
    const length = nums.length;
    const map = {};
    let repeat = -1;
    for (let i = 0; i < length; i++) {
        if (map[nums[i]] == undefined) { //如果map的长度为length，这里改为map[nums[i]-1]
            map[nums[i]] = 1;
        } else {
            repeat = nums[i];
            break;
        }
    }
    return repeat;
};
//set
var findDuplicate = function (nums) {
    const length = nums.length;
    const set = new Set();
    let repeat = -1;
    for (let i = 0; i < length; i++) {
        if (!set.has(nums[i])) { //如果map的长度为length，这里改为map[nums[i]-1]
            set.add(nums[i]);
        } else {
            repeat = nums[i];
            break;
        }
    }
    return repeat;
};
//set
var findDuplicate = function (nums) {
    const length = nums.length;
    const set = new Set();
    let repeat = -1;
    for (let i = 0; i < length; i++) {
        if (set.has(nums[i])) { //如果map的长度为length，这里改为map[nums[i]-1]
            repeat = nums[i];
            break;

        }
        set.add(nums[i]);
    }
    return repeat;
};

//因为小于target 的数 i 满足cnt[i]=i，大于等于target 的数 j满足 cnt[j]=j+1，通过二分解法找到cnt[i]>i的数，这个数就是重复数
var findDuplicate = function (nums) {
    const length = nums.length;
    let left = 1;
    let right = length - 1; // 定义target在左闭右开的区间里，即：[left, right]
    let ans = -1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1); //可以防止left+right溢出（超出整数范围）。
        //mid=left+((right-left)>>1);//有符号右移1相当于除于2，并去掉小数得到整数
        let cnt = 0;
        for (let i = 0; i < length; i++) {
            if (nums[i] <= mid) cnt++;
        }
        if (cnt <= mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
            ans = mid;
        }
    }
    
    return ans;
};

//快慢指针
// 快慢指针，一个时间复杂度为O(N)的算法。

// 其一，对于链表问题，使用快慢指针可以判断是否有环。

// 其二，本题可以使用数组配合下标，抽象成链表问题。但是难点是要定位环的入口位置。

// 举个例子：nums = [2,5, 9 ,6,9,3,8, 9 ,7,1]，构造成链表就是：2->[9]->1->5->3->6->8->7->[9]，也就是在[9]处循环。

// 其三，快慢指针问题，会在环内的[9]->1->5->3->6->8->7->[9]任何一个节点追上，不一定是在[9]处相碰，事实上会在7处碰上。

// 其四，必须另起一个for循环定位环入口位置[9]。这里需要数学证明。

// 对“其四”简单说明一下，既然快慢指针在环内的某处已经相碰了。那么，第二个for循环遍历时，res指针还是在不停的绕环走，但是必定和i指针在环入口处相碰
//赞一个，顺便补充一下关于“其四”的证明：

// 快指针每次走2步，慢指针每次走1步。
// 设相遇时快指针走t2步，慢指针走t1步，环长为c。 则相遇时, 快指针比慢指针多走一个环的长度，即 t2 = t1 + c。

// 又t2 = 2t1 （快指针走的步数是慢指针的两倍） 则 2t1 = t1 + c, t1=c，即慢指针走了c步。

// 设环起点在第k步，显然慢指针再走k步就会到达环的终点，也是环的起点。如果设置一个i指针从起点开始走，则慢指针和i指针会在环起点相碰。
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    slow = 0;
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}
//https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    while (true) {
        slow=nums[slow];
        fast=nums[nums[fast]];
        if(slow==fast){
            slow=0;
            while (slow!=fast) {
                slow=nums[slow];
                fast=nums[fast];
            }
            return slow;
        }
        
    }
    return slow;
}
//和相差
var findDuplicate = function(nums) {
  const length=nums.length;
  const set=Array.from(new Set(nums));
  const orginSum=nums.reduce((acc,cur)=>acc+cur,0);
  const setSum=set.reduce((acc,cur)=>acc+cur,0);
  return (orginSum-setSum)/(length-set.length);
}