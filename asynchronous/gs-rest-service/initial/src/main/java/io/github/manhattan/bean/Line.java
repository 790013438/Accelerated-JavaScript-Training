package io.github.manhattan.bean;

/**
 * 此类的主要功能是： <br/>
 * 1. 处理<br/>
 * 此类提供的主要方法有：<br/>
 * 1.
 *
 * @author chengmiao
 * @version 1.0
 * ClassName io.github.manhattan.bean
 * Company: com.yinhai
 * date 2019/7/16
 * @see *#
 */
public class Line {
    private String name;
    private int value;

    public String getName() {
        return name;
    }

    public Line setName(String name) {
        this.name = name;
        return this;
    }

    public int getValue() {
        return value;
    }

    public Line setValue(int value) {
        this.value = value;
        return this;
    }
}
