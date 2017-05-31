<?php
class Model {
    
    private $__conn;
     
    // Hàm Kết Nối
    function connect()
    {
       
        if (!$this->__conn){
           
            $this->__conn = mysqli_connect('localhost', 'root', '', 'DuAnConDao') or die ('Lỗi kết nối');
    
            // Xử lý truy vấn UTF8 để tránh lỗi font
            mysqli_query($this->__conn, "SET NAMES 'utf8'");
        }
    }
    
    // Hàm Ngắt Kết Nối
    function dis_connect(){
      
        if ($this->__conn){
            mysqli_close($this->__conn);
        }
    }
    
    // Hàm Insert
    function insert($table, $data)
    {
  
        $this->connect();
    
  
        $field_list = '';

        $value_list = '';
    
    
        foreach ($data as $key => $value){
            $field_list .= ",$key";
            $value_list .= ",'".mysqli_escape_string($this->__conn,$value)."'";
        }
    
        $sql = 'INSERT INTO '.$table. '('.trim($field_list, ',').') VALUES ('.trim($value_list, ',').')';
    
        return mysqli_query($this->__conn, $sql);
    }
    
    // Hàm Update
    function update($table, $data, $where)
    {
        $this->connect();
        $sql = '';
        foreach ($data as $key => $value){
            $sql .= "`$key` = '".mysqli_escape_string($this->__conn,$value)."',";
        }

        $sql = 'UPDATE '.$table. ' SET '.trim($sql, ',').' WHERE '.$where;
    
        return mysqli_query($this->__conn, $sql);
    }
    
    // Hàm delete
    function remove($table, $where){
 
        $this->connect();
   
        $sql = "DELETE FROM $table WHERE $where";
        return mysqli_query($this->__conn, $sql);
    }
    
    // Hàm lấy danh sách
    function get_list($sql)
    {
 
        $this->connect();
         
        $result = mysqli_query($this->__conn, $sql);
    
        if (!$result){
            die ('Câu truy vấn bị sai');
        }
    
        $return = array();
    
      
        while ($row = mysqli_fetch_assoc($result)){
            $return[] = $row;
        }  
      
        mysqli_free_result($result);
    
        return $return;
    }
    
    // Hàm lấy 1 record dùng trong trường hợp lấy chi tiết tin
    function get_row($sql)
    {
        
        $this->connect();
         
        $result = mysqli_query($this->__conn, $sql);
    
        if (!$result){
            die ('Câu truy vấn bị sai');
        }
    
        $row = mysqli_fetch_assoc($result);
    
     
        mysqli_free_result($result);
    
        if ($row){
            return $row;
        }
    
        return false;
    }
}