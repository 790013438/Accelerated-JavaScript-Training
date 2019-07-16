package io.github.manhattan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 此类的主要功能是： <br/>
 * 1. 处理<br/>
 * 此类提供的主要方法有：<br/>
 * 1.
 *
 * @author chengmiao
 * @version 1.0
 * ClassName io.github.manhattan.controller
 * Company: com.yinhai
 * date 2019/7/16
 * @see *#
 */
@Controller
public class EchartsController {
    @RequestMapping("/charts")
    public String charts() {
        return "asynchronous/line";
    }

    @RequestMapping("/bar")
    public String bar() {
        return "asynchronous/bar";
    }

    @RequestMapping("/loadingBar")
    public String loadingBar() {
        return "asynchronous/barLoading";
    }
}
