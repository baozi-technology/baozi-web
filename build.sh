#!/bin/bash
asciidoctor --verbose -s -a data-uri content/ranch-under-the-hood/Ranch_Under_The_Hood.adoc -D content/ranch-under-the-hood/
gatsby build
