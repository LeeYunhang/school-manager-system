
 import React from "react";
 import Qwest   from "qwest";

export  default class Ajax_quest extends  react.Component {

    rend(){
            Qwest.get('localhost:3000/user', {async: true})
                .then(function() {
                     
                 })
                .send(function () {
                   
                 });
     }

}
