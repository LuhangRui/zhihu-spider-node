'use strict';
const Crawler = require("crawler");
const fs = require("fs");
const moment = require("moment");
const loadsh = require("lodash");
const inquirer = require('inquirer');
let base_url = '';
inquirer
    .prompt(
        [{
            type: 'input',
            name: 'baseUrl',
            message: "请输入要爬取的知乎链接:"
        }]
    )
    .then(answers => {
        base_url = answers.baseUrl;

        let imgsArr = [];
        let uris = [];

        function fileDown(error, res, done) {
            if (error) {
                console.log(error);
            } else {
                console.log('正在下载' + res.options.filename);
                fs.createWriteStream(res.options.filename).write(res.body);
            }
            done();
        }

        const c = new Crawler({
            // encoding:null,
            maxConnections: 10,
            // This will be called for each crawled page
            callback: function (error, res, done) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(res.statusCode);
                    // fs.createWriteStream(res.options.filename).write(res.body);
                }
                done();
            }
        });

        c.queue({
            uri: base_url,
            callback: function (error, res, done) {
                if (error) {
                    console.log(error);
                } else {
                    let $ = res.$;
                    console.log('开始收集地址');
                    $(".RichContent-inner figure img").each((index, element) => {
                        let uri = $(element).attr('data-original');
                        // console.log(uri);
                        if (uri) {
                            uris.push(uri);
                        }

                    });
                    if (!loadsh.isEmpty(uris)) {
                        // console.log(uris.length);
                        uris = loadsh.uniq(uris);
                        // console.log(uris.length);
                        uris.forEach((v, i) => {
                            console.log(v);
                            let urlParse = v.split('.');
                            let temp = {
                                uri: v,
                                encoding: null,
                                jquery: false,
                                filename: './download/zhihu-spider-' + i + '-' + moment().format("YYYY-MM-DD") + '.' + urlParse[urlParse.length - 1],
                                callback: fileDown
                            };
                            imgsArr.push(temp);
                        })
                    }
                    // console.log(imgsArr);
                    console.log('共' + imgsArr.length + '张图片，开始下载');
                    c.queue(imgsArr);
                }
                done();
            }
        });
    });

