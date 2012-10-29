   function NodeForm($scope) {
        $scope.jason = { items: [{ attr: {type: '', comparator: ''} }] };
	
	$scope.inputType = $scope.jason.items ;
        
        $scope.nodeAttr = dataForSelects;
        
        $scope.addItem = function () {
          $scope.jason.items.push({ attr: {type: '', comparator: ''} });
        };

        $scope.removeItem = function (index) {
            $scope.jason.items.splice(index, 1);
        };

    }

var dataForSelects = [
          {
            "attr": [
              {
                "attr": "Os Type" , "comparator": [ 
					  {
					    "comparator" : "=",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≠",
					    "valueDescriptor" : "inputNumber"
					  }
					]
              },
              {
                "attr": "Os Name" , "comparator": [ 
					  {
					    "comparator" : "=",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≠",
					    "valueDescriptor" : "inputNumber"
					  }
					]
              },
              {
                "attr": "Os Version" , "comparator": [ 
					  {
					    "comparator" : "Is defined",
					    "valueDescriptor" : "Null"
					  },
					  {
					    "comparator" : "Is not defined",
					    "valueDescriptor" : "Null"
					  },
					  {
					    "comparator" : "=",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≠",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "Regex",
					    "valueDescriptor" :"textPattern"
					  },
					  {
					    "comparator" : "<",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : ">",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≤",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≥",
					    "valueDescriptor" : "inputNumber"
					  },
					]
              }
            ],
            "type": "Node Summary"
          },
          {
            "attr": [
              {
                "attr": "Machine ID" , "comparator": "="
              },
              {
                "attr": "Name" , "comparator": "="
              },
              {
                "attr": "Description" , "comparator": "="
              }
            ],
            "type": "Hardware"
          },
          {
            "attr": [
              {
                "attr": "Name" , "comparator": "="
              },
              {
                "attr": "Description" , "comparator": "="
              },
              {
                "attr": "Version" , "comparator": "="
              },
              {
                "attr": "Release Date" , "comparator": "="
              },
              {
                "attr": "Editor" , "comparator": "="
              }
            ],
            "type": "Software"
          }
        ];
