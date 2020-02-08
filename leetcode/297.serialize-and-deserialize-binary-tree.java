/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {
    private int idx = 0;
    //  TODO: use StringBuilder, make the function void
    private String serializeHelper(TreeNode root, String str) {
        if (root == null) {
            str += "#,";
            return str;
        }
        
        str += String.valueOf(root.val) + ",";
        
        str = serializeHelper(root.left, str);
        str = serializeHelper(root.right, str);
        
        return str;
    }

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        return serializeHelper(root, "");
        
    }
    
    // TODO: remove this.idx, delete the first element in the ArrayList (make array asList)
    private TreeNode deserializeHelper(String[] arr) {        
        if (this.idx == arr.length) {
            return null;
        }
        
        if (arr[this.idx].equals("#")) {
            this.idx++;
            return null;
        }
        
        TreeNode curr = new TreeNode(Integer.parseInt(arr[this.idx++]));
        curr.left = deserializeHelper(arr);
        curr.right = deserializeHelper(arr);
        
        return curr;
    }
    
    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        String[] arr = data.split(","); 
        return deserializeHelper(arr);
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));