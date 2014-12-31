#!/bin/bash
set -e -u

case "${1:-}" in 

'')
  echo -e "please specify what you want to do"
	;;
watch)
  gulp clean 
  gulp watch
  ;;
build)
  gulp clean 
  gulp build
  ;;
browse)
  gulp build
  open build/index.html
  ;;
'feature-tests-watch')
  gulp build-feature-test-harness
  node_modules/.bin/testem -f tests/feature/testem.json
  ;;
'feature-tests')
  gulp build-feature-test-harness
  node_modules/.bin/testem -f tests/feature/testem.json ci
  ;;
*)
  echo "unrecognized command: $1"
	;;
esac
