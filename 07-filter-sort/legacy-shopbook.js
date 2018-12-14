(function() {

    function sortResults(resultIndex, sortBy) {
        const sortAttribute = 'data-'+sortBy;
        const resultsContainer = document.getElementById('results-'+resultIndex);

        const sortedResults = Array.from(resultsContainer.children)
            .sort((aNode, bNode) => aNode.getAttribute(sortAttribute) - bNode.getAttribute(sortAttribute));
        
        for (let sortedChild of sortedResults) {
            resultsContainer.appendChild(sortedChild);
        }
    }

    function initResults() {
        if (document.getElementById('results-0')) {
            sortResults(0, 'sort-departing');
        }
        if (document.getElementById('results-1')) {
            sortResults(1, 'sort-departing');
        }
    }

    initResults();

})();