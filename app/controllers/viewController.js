var aboutMeCtrl = function($scope, dataFactoryFn, postContact, $uibModal) {
    dataFactoryFn.then(function(response) {
        $scope.abtMe = response.data.aboutMe;
        $scope.quickLinks = response.data.aboutMe.quickLinks;
        $scope.myProjects = response.data.myProjects.listOfProjects;
        $scope.myEducation = response.data.myEducation.Masters;
        $scope.mySkills = response.data.myEducation.keySkills;
        $scope.contactMeProd = response.data.contactMe.projectType;
        $scope.contactMeBudget = response.data.contactMe.budget;
        var currentYear = new Date();
        currentYear = currentYear.getFullYear();
        $scope.copyYear = currentYear;

        $(window).resize(function() {
            var winHeight = $(window).height();
            var homeVarHeight = winHeight - 132;
            $scope.homeHeight = homeVarHeight + "px";

        });
        $scope.homeHeight = $(window).height() - 134 + "px";


    });

    $scope.sendPost = function() {

        /*var data = '{"inputUsername":"'+$scope.nameContact+'","inputEmail": "'+$scope.emailContact+'","inputContent":"'+$scope.contentContact+'","inputPhone":"'+$scope.phoneContact+'","inputProjectType":"'+$scope.projectType+'","inputBudget":"'+$scope.budgetContact+'"}';
data = JSON.parse(data);*/
		var data = '{"inputUsername":"'+$scope.nameContact+'","inputEmail": "'+$scope.emailContact+'","inputContent":"'+$scope.contentContact+'","inputPhone":"'+$scope.phoneContact+'","inputProjectType":"'+$scope.projectType+'","inputBudget":"'+$scope.budgetContact+'"}';
data = JSON.parse(data);
		
        postContact.postSomething(data).then(function(data) {

            var modalInstance = $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'modal.tpl.html',
                controller: 'ModalInstanceCtrl',
                resolve: {} // empty storage
            });

            modalInstance.result.then(function() {


            }, function() {

            });
			
        })
		
        $scope.nameContact = '';
        $scope.emailContact = '';
        $scope.contentContact = '';
		$scope.phoneContact = '';
		$scope.projectType = '';
		$scope.budgetContact = '';
    }
};

mainModule.controller('aboutMeCtrl', ['$scope', 'dataFactory', 'postContact', '$uibModal', aboutMeCtrl]);

mainModule.controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {

    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});