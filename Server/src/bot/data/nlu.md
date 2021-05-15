## intent:give_name
- Anh là [Thắng](cust_name)
- Anh là [Thanh](cust_name)
- Anh là [Chiến Thắng](cust_name)
- Anh tên là [Vương Văn Huy](cust_name)
- Chị là [Hằng](cust_name)
- Em là [Trang](cust_name)
- Cô tên [Vân](cust_name)
- Chú tên [Hùng](cust_name)
- Cậu là [Thanh](cust_name)
- Bà là [Tuấn](cust_name)
- Tớ tên [Toàn](cust_name)
- [Toàn](cust_name)
- [Thanh](cust_name)
- [Bảo](cust_name)
- Anh là [Lê Đức Thanh](cust_name)
- Anh là [Nguyễn Văn A](cust_name)
- Anh là [Thái](cust_name)
- Anh là [Toàn](cust_name)
- Anh là [Văn Hạnh](cust_name)
- Anh là [Long](cust_name)
- Tớ là [Long](cust_name)
- Tớ là [Lâm](cust_name)
- Bạn ơi tớ là [Lân](cust_name)
- À mình là [Toàn](cust_name)
- Tên [Bảo](cust_name)
- Tên [Khoa](cust_name)
- Tên [Huấn](cust_name)
- Tên [Thành](cust_name)
- Tên [Tuấn](cust_name)
- [Bảo](cust_name)
- [Bảo](cust_name)

## intent:greet
- xin chào
- chào bạn
- hello
- hi
- hey
- mình có vài câu hỏi
- có ai giúp mình không
- bạn ơi
- anh ơi
- chị ơi
- cháu ơi
- hello 
- chào 
- hi 
- có ai ở đây không?

## intent:bye
- tạm biệt
- chào tạm biệt
- chào tạm biệt em
- tạm biệt em
- tạm biệt em nhé


## intent:thank
- chuẩn
- hay
- siêu
- tuyệt
- cám ơn
- thanks
- thank you
- ok
- cảm ơn em
- cảm ơn em nhiều nhé
- cảm ơn


## intent:ask_product
- tôi muốn mua hàng
- bạn có thể gợi ý cho tôi vài sản phẩm
- tôi đang muốn mua vài sản phẩm
- minh cần mua vài món hàng
- mua gì nhỉ
- có gì thú vị không
- cần lắm một vài món đồ để xả tiền
- mua hàng
- tao muốn mua hàng
- tao muốn đốt tiền 
- bên bạn có những sản phẩm nào 
- bạn có thể gợi ý cho tôi vài sản phẩm 
- gợi ý đi
- gợi ý cho tao đi 
- gợi ý sản phẩm đi 
- chả biết mua gì
- bên mày bán gì
- bên cậu có sản phẩm nào 
- bán gì
- bán gì thế 
- tao muốn mua đồ 
- tớ muốn mua quần áo 
- tao cần mua giày 
- mình muốn mua đồ 
- nói gì đi 
- nói gì đi mày
- nói gì đi bạn 
- cần tiêu tiền 
- nói xem có đồ gì ngon 
- có hàng gì tốt không 
- mua đồ em ơi 
- giới thiệu đi 
- bán cái gì 
- mày bán gì 
- cửa hàng có gì 
- cửa hàng có gì không 
- cửa hàng còn gì
- cửa hàng còn gì không 

## intent:ask_func_list
- bạn có thể làm được những gì
- bạn giúp được gì nào
- chức năng của bạn là gì
- bạn có thể làm được mấy chức năng
- bạn giỏi nhất làm gì
- bạn có tư vấn giúp mình được không
- việc gì bạn làm được
- kể xem bạn làm được gì
- cho mình biết bạn làm được gì nhé
- bạn hữu dụng như thế nào
- bạn có ích trong những việc gì
- lĩnh vực gì bạn giỏi nhất
- mình tò mò về những việc bạn làm được
- chẳng biết bạn làm được gì
- bạn tệ nhất trong việc gì
- bạn biết được những lĩnh vực gì
- bạn giỏi hỗ trợ nhất trong lĩnh vực gì
- kể cho mình biết những việc bạn có thể làm được nhé
- nói cho mình về những việc bạn giúp được mình
- bạn giúp được mình gì nào
- bạn có thể làm gì
- em giúp được gì
- em làm được gì
- mày biết làm gì
- em biết làm gì
- bạn biết làm gì
- biết làm gì
- làm được gì 
- có làm được gì 
- có làm được trò gì 
- giúp giúp cái gì
- biết gì mà nói
- làm được gì
- giúp được gì
- mày làm được gì
- có biết gì
## regex:product_name
- ^[a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$
## intent:product_name_entry
- tôi muốn mua [bikini](product_name)
- [mũ lưỡi trai](product_name)
- [quần bò](product_name)
- anh cần [quần vải](product_name)
- anh cần [quần jean](product_name)
- anh thích [quần ngố](product_name)
- em mua [quần đùi](product_name)
- mình thích mua [áo khoác](product_name)
- à e muốn một cái [áo mưa](product_name)
- [áo](product_name) chụp kỉ yếu
- có [áo biker](product_name)(product_name) không
- cần vài chiếc [áo peterpan](product_name)(product_name) không
- chú lấy vài chiếc [áo sheer](product_name)
- mua [áo tay dài](product_name)
- lấy [áo crop top](product_name)
- chủ quán có [áo blouse](product_name) không 
- chủ quán có [áo cánh dơi](product_name) không 
- chủ quán có [áo dạ](product_name) không 
- chủ quán có [áo hai dây](product_name) không 
- mua [áo len](product_name) 
- bán [áo jumpsuit](product_name) không
- [hoodie](product_name)  
- [áo t-shirt](product_name)
- [váy](product_name) dự tiệc
- bán [váy princess](product_name) không
- bán [Princess Dress](product_name) không
- bán [Polo Dress](product_name) không
- bán [Coat Dress](product_name) không
- bán [Sheath Dress](product_name) không
- bán [House Dress](product_name) không
- bán [Shirtwaist Dress](product_name) không
- bán [Sundress Dress](product_name) không
- bán [Pen Skirt](product_name) không
- bán [Kilt](product_name) không
- [váy](product_name) sang chảnh
- [quần âu](product_name)
- [ko biết]{"entity":"product_name","value":""}
- [không biết]{"entity":"product_name","value":""}
- [chưa biết tên]{"entity":"product_name","value":""}
- [tôi mới vào đây]{"entity":"product_name","value":""}
- [giới thiệu cho tôi đi]{"entity":"product_name","value":""}
- [chịu bạn ơi]{"entity":"product_name","value":""}
- [tôi ko rõ]{"entity":"product_name","value":""}
- [ko rõ]{"entity":"product_name","value":""}
- [chả biết nữa]{"entity":"product_name","value":""}
- [biết sao được]{"entity":"product_name","value":""}

## intent:attribute_value_entry
- màu [hường](attribute_value) nam tính
- màu [xanh](attribute_value) nam tính
- màu [đỏ](attribute_value)
- màu [tím](attribute_value)  
- màu [cam](attribute_value)  
- màu [nâu](attribute_value)  
- màu [vàng](attribute_value)  
- màu [lục](attribute_value)  
- màu [lam](attribute_value)  
- màu [tràm](attribute_value)  
- màu [tím](attribute_value)  
- cỡ  [s](attribute_value) 
- cỡ [xl](attribute_value) 
- cỡ [2xl](attribute_value) 
- cỡ [6xl](attribute_value) 
- cỡ [m](attribute_value) 
- cỡ [l](attribute_value) 
- cỡ [S](attribute_value) 
- cỡ [L](attribute_value) 
- cỡ [M](attribute_value) 
- cỡ [XL](attribute_value) 
- cỡ [2XL](attribute_value) 
- cỡ [3XL](attribute_value) 
- cỡ [4XL](attribute_value) 
- cỡ [5XL](attribute_value) 
- Anh thích màu [hường](attribute_value) nam tính
- Anh mặc cỡ [S](attribute_value)
- màu [đỏ](attribute_value) cỡ [M](attribute_value)
- Chọn [bừa]{"entity":"attribute_value","value":""} đi 
- [ko biết]{"entity":"attribute_value","value":""}
- [không biết]{"entity":"attribute_value","value":""}
- [chưa biết tên]{"entity":"attribute_value","value":""}
- [tôi mới vào đây]{"entity":"attribute_value","value":""}
- [giới thiệu]{"entity":"attribute_value","value":""} cho tôi đi
- [chịu]{"entity":"attribute_value","value":""} bạn ơi
- [tôi ko rõ]{"entity":"attribute_value","value":""}
- [ko rõ]{"entity":"attribute_value","value":""}
- [chả biết]{"entity":"attribute_value","value":""} nữa
- [biết sao được]{"entity":"attribute_value","value":""}
- [nào cũng được]{"entity":"attribute_value","value":""}
- chọn [bừa]{"entity":"attribute_value","value":""} đi
- [biết có gì]{"entity":"attribute_value","value":""} đâu mà chọn 
- [biết gì]{"entity":"attribute_value","value":""} đâu mà chọn 
- mình [mới vào]{"entity":"attribute_value","value":""} ko rõ.
- [lần đầu vào]{"entity":"attribute_value","value":""} ko rõ.
- [lần đầu vào]{"entity":"attribute_value","value":""} biết shop bán gì mà nói.
## intent:price_from_entry
- từ [200]{"entity": "price_entities", "role": "price_from"}$
- từ [200]{"entity": "price_entities", "role": "price_from"} - [300]{"entity": "price_entities", "role": "price_to"} $
- từ [30]{"entity": "price_entities", "role": "price_from"} - [90]{"entity": "price_entities", "role": "price_to"} $
- từ [25]{"entity": "price_entities", "role": "price_from"} - [97]{"entity": "price_entities", "role": "price_to"} $
- từ [10]{"entity": "price_entities", "role": "price_from"} - [69]{"entity": "price_entities", "role": "price_to"} $
- từ [290]{"entity": "price_entities", "role": "price_from"} - [200]{"entity": "price_entities", "role": "price_to"} $
- từ [180]{"entity": "price_entities", "role": "price_from"} - [259]{"entity": "price_entities", "role": "price_to"} $
- từ [111]{"entity": "price_entities", "role": "price_from"} - [690]{"entity": "price_entities", "role": "price_to"} $
- từ [149]{"entity": "price_entities", "role": "price_from"} tới [177]{"entity": "price_entities", "role": "price_to"} $
- từ [21]{"entity": "price_entities", "role": "price_from"} tới [50]{"entity": "price_entities", "role": "price_to"} $
- từ [39]{"entity": "price_entities", "role": "price_from"} tới [62]{"entity": "price_entities", "role": "price_to"} $
- từ [49]{"entity": "price_entities", "role": "price_from"} tới [99]{"entity": "price_entities", "role": "price_to"} $
- [50]{"entity": "price_entities", "role": "price_from"} tới [101]{"entity": "price_entities", "role": "price_to"} $
- [64]{"entity": "price_entities", "role": "price_from"} tới [246]{"entity": "price_entities", "role": "price_to"} $
- [11]{"entity": "price_entities", "role": "price_from"} tới [22]{"entity": "price_entities", "role": "price_to"} $
- à chắc [100]{"entity": "price_entities", "role": "price_from"} - [200]{"entity": "price_entities", "role": "price_to"} $ à
- à chắc [111]{"entity": "price_entities", "role": "price_from"} - [218]{"entity": "price_entities", "role": "price_to"} $ nhé
- à chắc [169]{"entity": "price_entities", "role": "price_from"} - [370]{"entity": "price_entities", "role": "price_to"} $
- à khoảng [56]{"entity": "price_entities", "role": "price_from"} - [80]{"entity": "price_entities", "role": "price_to"} $ bot ơi 
- chắc khoảng [56]{"entity": "price_entities", "role": "price_from"} - [80]{"entity": "price_entities", "role": "price_to"} $ bot ơi 
- chắc khoảng [20]{"entity": "price_entities", "role": "price_from"} - [800]{"entity": "price_entities", "role": "price_to"} $ bot ơi 
- chắc khoảng [506]{"entity": "price_entities", "role": "price_from"} - [810]{"entity": "price_entities", "role": "price_to"} $ bot ơi 
- khả năng từ [69]{"entity": "price_entities", "role": "price_from"} - [150]{"entity": "price_entities", "role": "price_to"} $ bạn ơi 
- mình muốn trong [180]{"entity": "price_entities", "role": "price_from"} - [350]{"entity": "price_entities", "role": "price_to"} 
- từ  [69]{"entity": "price_entities", "role": "price_from"} đến [6969]{"entity": "price_entities", "role": "price_to"} 
- muốn  [310]{"entity": "price_entities", "role": "price_from"} đến [800]{"entity": "price_entities", "role": "price_to"} 
- > [300]{"entity": "price_entities", "role": "price_from"} $
- [600]{"entity": "price_entities", "role": "price_from"}$
- [100]{"entity": "price_entities", "role": "price_from"}$
- [137]{"entity": "price_entities", "role": "price_from"}$
- [179]{"entity": "price_entities", "role": "price_from"}$
- [800]{"entity": "price_entities", "role": "price_from"}$
- [249]{"entity": "price_entities", "role": "price_from"}$
- [1609]{"entity": "price_entities", "role": "price_from"}$
- em muốn sản phẩm nào đắt hơn [1609]{"entity": "price_entities", "role": "price_from"}$ ý
- ta cần sản phẩm giá cao hơn [500]{"entity": "price_entities", "role": "price_from"}
- chắc phải cao hơn [500]{"entity": "price_entities", "role": "price_from"}
- anh không muốn mua sản phẩm nào rẻ hơn [900]{"entity": "price_entities", "role": "price_from"}
- không dưới [800]$ nhé
## intent:price_to_entry
- anh chỉ có [5k]{"entity": "price_entities", "role": "price_to"}. mua gì giờ ?
- em chỉ còn [5k]{"entity": "price_entities", "role": "price_to"}. mua gì giờ ?
- chắc [500]{"entity": "price_entities", "role": "price_to"} thôi ?
- dư [500]{"entity": "price_entities", "role": "price_to"} đang không biết mua gì ?
- tư vấn gì khoảng [500]{"entity": "price_entities", "role": "price_to"}. mua gì giờ ?
- khoảng [200]{"entity": "price_entities", "role": "price_to"}$
- khoảng [400]{"entity": "price_entities", "role": "price_to"}$
- khoảng [500]{"entity": "price_entities", "role": "price_to"}$
- khoảng [900]{"entity": "price_entities", "role": "price_to"}$ 
- [1000]{"entity": "price_entities", "role": "price_to"}$
- [6000]{"entity": "price_entities", "role": "price_to"}$
- tối đa [500]{"entity": "price_entities", "role": "price_to"}$
- chắc dưới [600]{"entity": "price_entities", "role": "price_to"}$
- nhỏ hơn [600]{"entity": "price_entities", "role": "price_to"}$
- bé hơn [600]{"entity": "price_entities", "role": "price_to"}$
- <[500]{"entity": "price_entities", "role": "price_to"}$
-  [40]{"entity": "price_entities", "role": "price_to"}$

## intent:out_of_scope
- that's not what I want to do
- wait stop
- you're no help
- this is no help at all
- how old are you
- I want to order a pizza
- tell me the weather
- this isn't working
- I already told you that
- don't like that
- I don't want to tell you that
- none of your business
- that's not right
- stop asking
- nevermind
- I want to do something else
- I changed my mind