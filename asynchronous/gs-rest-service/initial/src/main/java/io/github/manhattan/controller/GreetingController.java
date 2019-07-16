package io.github.manhattan.controller;

import io.github.manhattan.bean.Line;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;

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
@RestController
public class GreetingController {

    @RequestMapping("/greeting")
    public List<Line> greeting() {
        List<Line> line = new LinkedList<>();
        line.add(new Line().setValue(5).setName("衬衫"));
        line.add(new Line().setValue(20).setName("羊毛衫"));
        line.add(new Line().setValue(36).setName("雪纺衫"));
        line.add(new Line().setValue(10).setName("裤子"));
        line.add(new Line().setValue(10).setName("高跟鞋"));
        line.add(new Line().setValue(20).setName("袜子"));
        line.add(new Line().setValue(23).setName("滑板"));
        return line;
    }
}
