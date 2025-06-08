<script>

    document.getElementById('convertButton').addEventListener
    ('click', function() { }
    const km = parseFloat(document.getElementById('kmInput').value);
    if (isNaN(km)) {document.getElementById('result').textContent = 'Please enter a valid number.'};
    } else { }
    const miles = km * 0.621371;
    document.getElementById('result').textContent = `${km} kilometers is equal to ${miles.toFixed(2)} miles.`;
    }
});
</script>;
